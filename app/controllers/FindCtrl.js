"use strict";


MovieApp.controller("FindCtrl", [
  "$scope",
  "$http",
  "$location",
  "MovieFactory",

  function ($scope, $http, $location, MovieFactory) {
    // Default property values for keys bound to input fields
    $scope.movies = [];
    $scope.searchField = {
      "title": ""
    }

    $scope.getMovies = function (movieTitle) {
      $scope.apiCall = "http://www.omdbapi.com/?t=" +  movieTitle;

      // Invoke the promise that reads from Firebase
      MovieFactory($scope.apiCall).then(
        function (moviesObj) {
        // Handle resolve() from the promise
          Object.keys(moviesObj).forEach(function (key) {
            moviesObj[key] = key;
            $scope.movies.push(moviesObj[key]);
            console.log(key);
          })
          console.log("maybe",moviesObj.Poster)
        },

        // Handle reject() from the promise
        function (err) {
          console.log(err)
        }
      )
    }
  }
]);