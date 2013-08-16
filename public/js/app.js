'use strict';

// Declare app level module which depends on filters, and services

angular.module('OnCloud', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/streaming', {
      templateUrl: 'partials/streaming.html',
      controller: 'StreamingCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
