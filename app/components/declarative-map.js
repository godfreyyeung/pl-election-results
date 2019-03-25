import Component from '@ember/component';
import { inject } from '@ember/service';

// Turns a human readable string into a machine-friendly representation.
// Replaces spaces, slashes and ampersands with underscores.
function codifyString(stringToCodify) {
  let codifiedString = stringToCodify.replace(/\//g, "_").replace(/ /g, "_").replace(/\+/g, "_").replace(/&/g, "_");
  return codifiedString;
}

// Returns a promise that resolves to an operational layer created with client side graphics
function createOperationalLayer(component, updatedLayer) {

  console.log("DEC-MAP: returning Op Layer '" + codifyString(updatedLayer.id) + "'")

  let thisComponent = component,
    FeatureLayer = thisComponent.get('arcgisModules.FeatureLayer.module'),
    Graphic = thisComponent.get('arcgisModules.Graphic.module'),
    GraphicsLayer = thisComponent.get('arcgisModules.GraphicsLayer.module'),
    Query = thisComponent.get('arcgisModules.Query.module');

  let visualizationField = updatedLayer['visualizationField'],
    visualizationFieldType = updatedLayer['visualizationFieldType'],
    joinField = updatedLayer['joinField'],
    dataToJoin = updatedLayer['dataToJoin'];

  let newGraphics = new GraphicsLayer({ graphics: [] }),
    query = new Query();

  query.returnGeometry = true;
  query.outFields = ["*"];
  query.where = "1=1";

  let defaultLayer = new FeatureLayer({
    id: codifyString(updatedLayer.id),
    title: updatedLayer.label,
    url: updatedLayer.serviceUrl,
    visible: updatedLayer.visible,
  });

  return new Promise(function (resolve, reject) {

    if (dataToJoin) {

      let defaultLayerLoaded = defaultLayer.load();
      let defaultLayerFeatures = defaultLayer.queryFeatures(query);

      defaultLayerLoaded.then(function () {
        defaultLayerFeatures.then(function (queryFeatRes) {
          queryFeatRes.features.forEach(function (item) {
            let itemAttrs = item.attributes;
            itemAttrs[visualizationField] = parseFloat(dataToJoin[item.attributes[joinField]][visualizationField]);
            let g = new Graphic({
              geometry: item.geometry,
              attributes: itemAttrs
            });
            newGraphics.graphics.add(g);
          });

          defaultLayer.fields.push({
            name: visualizationField,
            alias: visualizationField,
            type: visualizationFieldType
          })

          let scratchLayer = new FeatureLayer({
            id: codifyString(updatedLayer.id),
            title: updatedLayer.label,
            source: newGraphics.graphics,
            fields: defaultLayer.fields,
            geometryType: defaultLayer.geometryType
          });

          scratchLayer.renderer = updatedLayer.renderer ? updatedLayer.renderer : defaultLayer.renderer;

          resolve(scratchLayer);
        });
      });

    } else {

      console.log("DEC-MAP: No data to join");

      if (updatedLayer.renderer) {
        defaultLayer.renderer = updatedLayer.renderer;
      }

      resolve(defaultLayer);

    }

  }); // end promise

} // end createOperationalLayer()


// Enables click-to-select for any layers that have renderer.selectedSymbol assigned.
// Also passes selected attribute data back up to calling context via its passed action.
// TODO: perhaps click functionality is passed in, instead?
function initMapClickInteractions(component) {

  let thisComponent = component,
    Graphic = component.get('arcgisModules.Graphic.module');

  thisComponent._view.on("click", function (event) {

    thisComponent._view.hitTest(event.screenPoint).then(function (response) {

      let clickedSelectionGraphics = response.results.filter(function (graphicObj, arr) {
        return (graphicObj.graphic.attributes.graphicSelected) ? true : false;
      })

      thisComponent._view.graphics.removeAll();

      if (clickedSelectionGraphics.length == 0) {
        for (let i = 0; i < response.results.length; i++) {
          let graphic = response.results[i].graphic;
          let selectedSymbol = thisComponent.get('existingLayers')[graphic.sourceLayer.id].selectedSymbol;
          if (selectedSymbol) {
            let selectedGraphic = new Graphic({
              geometry: graphic.geometry,
              symbol: selectedSymbol,
              attributes: Object.assign({ "graphicSelected": true }, graphic.attributes)
            });

            thisComponent._view.graphics.add(selectedGraphic);

          }
        }
      }

    });
  });
}

// enables highlighting hovered features when.hoverSymbol is assigned
// TODO: perhaps hover functionality is passed in, instead?
function initMapHoverInteractions(component) {
  let thisComponent = component,
    Graphic = component.get('arcgisModules.Graphic.module'),
    GraphicsLayer = component.get('arcgisModules.GraphicsLayer.module');

  let hoverLayer = new GraphicsLayer({
    graphics: []
  });

  thisComponent._view.map.add(hoverLayer);

  thisComponent._view.on('pointer-move', function (event) {
    thisComponent._view.hitTest(event).then(function (response) {

      // TODO: perhaps instead of recreating graphics from scratch, 
      // just replace one hoverGraphic's geometry with that of the hovered graphic
      if (hoverLayer.graphics) hoverLayer.removeAll();

      for (let i = 0; i < response.results.length; i++) {
        let graphic = response.results[i].graphic;
        let hoverSymbol = thisComponent.get('existingLayers')[graphic.sourceLayer.id].hoverSymbol;
        if (hoverSymbol) {
          let hoverGraphic = new Graphic({
            geometry: graphic.geometry,
            symbol: hoverSymbol,
            attributes: graphic.attributes
          });

          hoverLayer.graphics.add(hoverGraphic);
        }
      }

    });
  });

  thisComponent._view.on('pointer-leave', function (event) {
    hoverLayer.removeAll();
  });

} // end initLayerInteraction

// TODO: (1) Explore storing reference of acquired graphics from service, to bypass 
// pinging the service on each redraw. (Although Chrome does some caching of the service response)
// (2) Explore using ArcGIS JS API's "renderer generator" pattern to rerender the choropleth. This requires 
// attaching raw voting data to each state graphic when creating the layer. Then, on user input, 
// dynamically generating a renderer with a 'valueExpression' equation based on the user's selection.
// Finally, assign the new renderer to the layer without recreating the layer.
function drawMapLayers(component) {

  let thisComponent = component;

  let updatedLayers = thisComponent['layers'];

  for (let i = 0; i < updatedLayers.length; i++) {
    let updatedLayer = updatedLayers[i];

    if (
      !(
        updatedLayer.serviceUrl &&
        updatedLayer.type &&
        updatedLayer.id &&
        updatedLayer.label &&
        updatedLayer.visible
      )
    ) {
      console.log("DEC-MAP: You did not specify the required properties for layer '" + codifyString(updatedLayer.id) + "'. Check documentation.")
      continue; // to next updatedLayer
    }

    if (
      ((updatedLayer.dataToJoin) && !updatedLayer.joinField) ||
      ((updatedLayer.dataToJoin) && !updatedLayer.visualizationField)
    ) {
      console.log("DEC-MAP: You failed to specify required Operational Layer properties for the layer '" + codifyString(updatedLayer.id) + "'. Check documenation.")
      return;
    }

    let newLayerPromise;
    newLayerPromise = createOperationalLayer(component, updatedLayer);

    newLayerPromise.then(function (newLayer) {
      let newlyAddedLayer = {
        layer: newLayer
      }

      if (updatedLayer.selectedSymbol) {
        newlyAddedLayer.selectedSymbol = updatedLayer.selectedSymbol;
      }

      if (updatedLayer.hoverSymbol) {
        newlyAddedLayer.hoverSymbol = updatedLayer.hoverSymbol;
      }

      // remove previous version of layer from map
      if (thisComponent.get('existingLayers')[codifyString(updatedLayer.id)]) {
        thisComponent.get('group').remove(thisComponent.get('existingLayers')[codifyString(updatedLayer.id)].layer);
      }

      // add new version of layer to map
      thisComponent.get('group')
        .add(newLayer,
          (updatedLayer.index ? updatedLayer.index : Object.keys(thisComponent.get('existingLayers')).length)
        );

      // track new layer in existingLayers
      thisComponent.get('existingLayers')[codifyString(updatedLayer.id)] = newlyAddedLayer;

      // thisComponent.get('legend').layerInfos.push({
      //   layer: newLayer,
      //   title: updatedLayer.label
      // });

    }) // end newLayerPromise.then()

  } // end for(updatedLayers)
} // end drawMapLayers()


export default Component.extend({

  esriLoader: inject('esri-loader'),
  arcgisModules: null,
  existingLayers: Object.create(null),
  legend: null,

  init() {
    this._super(...arguments);
    this.set('arcgisModules', {
      'EsriMap': {
        'module': null,
        'path': 'esri/Map'
      },
      'MapView': {
        'module': null,
        'path': 'esri/views/MapView'
      },
      'FeatureLayer': {
        'module': null,
        'path': 'esri/layers/FeatureLayer'
      },
      'Graphic': {
        'module': null,
        'path': 'esri/Graphic'
      },
      'GraphicsLayer': {
        'module': null,
        'path': 'esri/layers/GraphicsLayer'
      },
      'GroupLayer': {
        'module': null,
        'path': 'esri/layers/GroupLayer'
      },
      'Query': {
        'module': null,
        'path': 'esri/tasks/support/Query'
      }
      //,
      // 'Legend': {
      //   'module': null,
      //   'path': 'esri/widgets/Legend'
      // }
    });
  },

  didReceiveAttrs() {
    this._super(...arguments);
    let thisComponent = this;

    // on first load
    if (!thisComponent._view) {

      thisComponent.get('esriLoader').loadModules(Object.keys(thisComponent.get('arcgisModules')).map((elem, indx, arr) => {
        return thisComponent.get('arcgisModules.' + elem + '.path');
      })).then(modules => {

        if (thisComponent.get('isDestroyed') || thisComponent.get('isDestroying')) {
          return;
        }

        Object.keys(thisComponent.get('arcgisModules')).map((elem, indx, arr) => {
          thisComponent.set('arcgisModules.' + elem + '.module', modules[indx]);
        });

        let MapView = thisComponent.get('arcgisModules.MapView.module'),
          EsriMap = thisComponent.get('arcgisModules.EsriMap.module'),
          Legend = thisComponent.get('arcgisModules.Legend.module'),
          GroupLayer = thisComponent.get('arcgisModules.GroupLayer.module'),
          updatedLayers = thisComponent.get('layers');

        const map = new EsriMap({ basemap: "gray" });

        thisComponent._view = new MapView({
          map: map,
          center: thisComponent["lngLat"] ? thisComponent["lngLat"] : [-110, 40],
          zoom: thisComponent["zoom"] ? thisComponent["zoom"] : 3,
          container: thisComponent["id"]
        });

        // thisComponent.set('legend', new Legend({
        //   view: thisComponent._view,
        //   layerInfos: [{}],
        //   container: "legend-container__drawer"
        // }));

        for (let i = 0; i < updatedLayers.length; i++) {
          thisComponent.get('existingLayers')[codifyString(updatedLayers[i].id)] = null;
        }

        let group = new GroupLayer();
        thisComponent.set('group', group);
        thisComponent._view.map.add(thisComponent.get('group'));

        drawMapLayers(thisComponent);

        initMapClickInteractions(thisComponent);
        initMapHoverInteractions(thisComponent);

      });

    } else {

      drawMapLayers(thisComponent);

    }

  },

  willDestroyElement() {
    let thisComponent = this;
    if (thisComponent._webMap) {
      thisComponent._webMap.destroy();
      delete thisComponent._webMap;
    }
  }
});