"use strict";


MovieApp.controller("FindCtrl", [
  "$scope",
  "$http",
  "$location",
  "MovieFactory",

  function ($scope, $http, $location, MovieFactory) {
    // Default property values for keys bound to input fields
    $scope.movies = [];

    // Invoke the promise that reads from Firebase
    MovieFactory().then(
      function (moviesObj) {
      // Handle resolve() from the promise
        Object.keys(moviesObj).forEach(function (key) {
          moviesObj[key] = key;
          $scope.movies.push(moviesObj[key]);
          console.log(key);
        })
      },

      // Handle reject() from the promise
      function (err) {
        console.log(err)
      }
    )
  }
]);