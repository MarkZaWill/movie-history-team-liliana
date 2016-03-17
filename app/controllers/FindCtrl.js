"use strict";


MovieApp.controller("FindCtrl", [
  "$scope",
  "$http",
  "$location",
  "MovieFactory",

  function ($scope, $http, $location, MovieFactory) {
    // Default property values for keys bound to input fields
    $scope.movieImages = [];
    $scope.searchField = {
      "title": ""
    }

    $scope.getMovies = function (movieTitle) {
      $scope.apiCall = "http://www.omdbapi.com/?s=" + movieTitle;
     
      // Invoke the promise that reads from Firebase
      MovieFactory($scope.apiCall).then(

        function (moviesObj) {
          console.log("moviesObj", moviesObj.Search);
           // for (var i in moviesObj.Search){
            $scope.movieImages = [];
            for (var i = 0; i < 5; i++) {
             
           console.log("moviesObj.Search.Poster", moviesObj.Search[i].Poster);
               if (moviesObj.Search[i].Poster != "N/A") {
        	$scope.movieImages.push(moviesObj.Search[i].Poster);
        	console.log("movies:", $scope.movieImages.image);
        }
      }
        },

        // Handle reject() from the promise
        function (err) {
          console.log(err)
        }
      )
    }
    }
  
]);