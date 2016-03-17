"use strict";

let MovieApp = angular.module('MovieApp', ["ngRoute"]);

	MovieApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
	      templateUrl: 'partials/log-in.html',
	      controller: 'LoginCtrl'
      }).
      when('/main', {
      	templateUrl: 'partials/main.html',
      	controller: 'MainCtrl'
      }).
      when('/find', {
	    	templateUrl: 'partials/find-movie.html',
	    	controller: 'FindCtrl'
      }).
      when('/movielist', {
	    	templateUrl: 'partials/movie-list.html',
	    	controller: 'MovieListCtrl'
      }).
      otherwise({
      	redirectTo: '/login'
      });

  }]);