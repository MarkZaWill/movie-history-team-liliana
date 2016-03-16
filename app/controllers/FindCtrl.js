"use strict";


MovieApp.controller("FindCtrl", [
  "$scope",
  "$http",
  "$location",
  "MovieFactory",

  function ($scope, $http, $location, MovieFactory) {
    // Default property values for keys bound to input fields
    $scope.movieImages = {};
    $scope.searchField = {
      "title": ""
    }

    $scope.getMovies = function (movieTitle) {
      $scope.apiCall = "http://www.omdbapi.com/?t=" + movieTitle;

      // Invoke the promise that reads from Firebase
      MovieFactory($scope.apiCall).then(
        function (moviesObj) {
        	$scope.movieImages.image = moviesObj.Poster;
        	console.log("movies:", $scope.movieImages);
        },

        // Handle reject() from the promise
        function (err) {
          console.log(err)
        }
      )
    }
  }
]);