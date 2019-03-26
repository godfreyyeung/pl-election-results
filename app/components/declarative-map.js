import Component from '@ember/component';
import { inject } from '@ember/service';

// Turns a human readable string into a machine-friendly representation.
// Replaces spaces, slashes and ampersands with underscores.
function codifyString(stringToCodify) {
  let codifiedString = stringToCodify.replace(/\//g, "_").replace(/ /g, "_").replace(/\+/g, "_").replace(/&/g, "_");
  return codifiedString;
}

// Returns a promise that resolves to a layer created with client side graphics
function createLayer(component, updatedLayer) {

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

} // end createLayer()

// update layer attributes.
function redrawLayer(component, updatedLayer) {

  let thisComponent = component,
    existingLayer = thisComponent.get('existingLayers')[updatedLayer.id].layer;

  if (existingLayer) {

    if (updatedLayer.visible != existingLayer.visible) {
      existingLayer.visible = updatedLayer.visible;
    }

    if (updatedLayer.visible && updatedLayer.dataToJoin) {

      let graphicsEdits = {
        updateFeatures: []
      }

      let existingLayerFeatures = existingLayer.source.items;
      let updatedData = updatedLayer.dataToJoin;
      let joinField = updatedLayer.joinField;
      let visualizationField = updatedLayer.visualizationField;

      for (let i = 0; i < existingLayerFeatures.length; i++) {
        let newValue = parseFloat(updatedData[existingLayerFeatures[i].attributes[joinField]][visualizationField]);
        existingLayerFeatures[i].attributes[visualizationField] = newValue;
        graphicsEdits.updateFeatures.push(existingLayerFeatures[i]);
      }

      let editPromise = existingLayer.applyEdits(graphicsEdits);

      editPromise.then(function (result) {
        console.log("DEC-MAP: Updated Op Layer '" + codifyString(updatedLayer.id) + "'");
      })

    } // end if(updatedLayer.visible && updatedLayer.dataToJoin)
  } // end if (updatedLayer.visible != existingLayer.visible)
} // end if (existingLayer)

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
        ((typeof updatedLayer.visible) == "boolean")
      )
    ) {
      console.log("DEC-MAP: You did not specify the required properties for layer '" + codifyString(updatedLayer.id) + "'. Check documentation.")
      continue; // to next updatedLayer
    }

    if (
      ((updatedLayer.dataToJoin) && !updatedLayer.joinField) ||
      ((updatedLayer.dataToJoin) && !updatedLayer.visualizationField)
    ) {
      console.log("DEC-MAP: You failed to specify required layer properties for the layer '" + codifyString(updatedLayer.id) + "'. Check documenation.")
      return;
    }

    // if layer is already added to the map, update its attributes and redraw
    if (thisComponent.get('existingLayers')[codifyString(updatedLayer.id)]) {
      redrawLayer(thisComponent, updatedLayer);
      // if layer is not yet added to map, add it. 
    } else {
      let newLayerPromise;
      newLayerPromise = createLayer(component, updatedLayer);

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
    }
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
          container: thisComponent["elementId"]
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