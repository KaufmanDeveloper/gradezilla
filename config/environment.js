'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'gradezilla',
    environment,
    rootURL: '/',
    locationType: 'auto',
    flashMessageDefaults: {
      timeout: 7000,
      type: 'info',
      types: ['positive', 'success', 'negative', 'error', 'info', 'warning'],
      showProgress: false
    },
    moment: {
      allowEmpty: true,
      includeTimezone: 'all',
    },

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
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.rootURL = '/';
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_MODULE_RESOLVER = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
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
    ENV.locationType = 'hash';
    ENV.rootURL = '/gradezilla/';
    // here you can enable a production-specific feature
  }

  return ENV;
};
