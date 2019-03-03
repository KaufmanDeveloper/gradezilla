'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const config = require('./config/environment');
const emberENV = process.env.EMBER_ENV;
const ENV = config(emberENV);


module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    'ember-cli-favicon': {
    //enabled: ENV != 'test', // By default favicons are NOT generated in TEST env to speedup builds
    enabled: true,
    onSuccess() {}, // You can call your callback when favicons are generated successfully

    iconPath: 'favicon.png', // icon path related to `public` folder

    // See the [favicons](https://github.com/itgalaxy/favicons) module for details on the available configuration options.
  }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
