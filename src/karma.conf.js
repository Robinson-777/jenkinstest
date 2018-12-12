// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: [
      { pattern: 'app/lib/angular.js', watched: true, included: true, served: true },
      { pattern: 'app/lib/angular-*.js', watched: true, included: true, served: true },
      { pattern: 'app/lib/**/*.js', watched: true, included: true, served: true },
      { pattern: 'app/js/**/*.js', watched: true, included: true, served: true },
      // add the line below with the correct path pattern for your case
      { pattern: 'path/to/**/*.png', watched: false, included: false, served: true },
      // important: notice that "included" must be false to avoid errors
      // otherwise Karma will include them as scripts
      { pattern: 'test/lib/**/*.js', watched: true, included: true, served: true },
      { pattern: 'test/unit/**/*.js', watched: true, included: true, served: true },
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      // require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], // PhantomJS Chrome
    singleRun: false
  });
};