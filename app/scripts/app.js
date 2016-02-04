'use strict';

/**
 * @ngdoc overview
 * @name sampleApp
 * @description
 * # sampleApp
 *
 * Main module of the application.
 */
angular
  .module('sampleApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'formly'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/outputs', {
        templateUrl: 'views/outputs.html',
        controller: 'outputsCtrl',
        controllerAs:'outputs'
      })
      .when('/metrics', {
        templateUrl: 'views/metrics.html',
        controller: 'metricCtrl',
        controllerAs:'metric'
      })
      .otherwise({
        redirectTo: '/outputs'
      });
  });
