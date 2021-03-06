module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/angular-notif-bar.js',      
      'test/spec/**/*.js'
    ],
    autoWatch: false,
    singleRun: true,
    browsers: ['PhantomJS'],
    exclude: []
  });
};
