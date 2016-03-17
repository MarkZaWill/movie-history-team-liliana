"use strict";

MovieHistory.controller("MovieListCtrl",
[
  "$scope",
  "$location",
  "$http",
 

  function ($scope, $location, $http)
  {
        // Default property values for keys bound to input fields
    $scope.newMovie = {
      name: "",
      year: "",
      actors: ""
    };
 $scope.addMovie = function () {
      console.log("this click was made");
      // POST the movie to Firebase
      $http.post(
        "https://moviehistbnc.firebaseio.com/movie.json",

        // Remember to stringify objects/arrays before
        // sending them to an API
        JSON.stringify({
          name: $scope.newMovie.name,
          year: $scope.newMovie.year,
          actors: $scope.newMovie.actors
          watchlist:$scope.newMovie.watched
        })

      // The $http.post() method returns a promise, so you can use then()
      ).then(
        () => $location.url("/movies/"),      // Handle resolve
        (response) => console.log(response)  // Handle reject
      );
    };  
  }
]