'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
  $routeProvider.when('/sobre', {templateUrl: 'partials/sobre.html', controller: 'aboutController'});
  $routeProvider.when('/contato', {templateUrl: 'partials/contato.html', controller: 'concactController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
