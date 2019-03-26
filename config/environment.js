'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'pl-election-results',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      mapLayers: [
        {
          serviceUrl: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0',
          id: 'states',
          label: 'States',
          type: 'operational',
          renderer: {
            type: "unique-value",
            field: "votePctDiff",
            defaultSymbol: {
              type: "simple-fill",
              outline: {
                width: 0.6,
                color: "#528092"
              }
            },
            visualVariables: [{
              type: "color",
              field: "votePctDiff",
              stops: [
                {
                  value: -25,
                  color: "red",
                },
                {
                  value: 25,
                  color: "green",
                }
              ]
            }],
            uniqueValueInfos: [{
              value: "NaN",
              symbol: {
                type: "simple-fill",
                style: "none",
                outline: {
                  color: "#888888",
                  width: .6
                }
              }
            }],
          },
          dataToJoin: null,
          visualizationField: "votePctDiff",
          visualizationFieldType: "double",
          joinField: "STATE_ABBR",
          visible: true,
          index: 2
        }
      ]
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
