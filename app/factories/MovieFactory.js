"use strict";


MovieApp.factory("MovieFactory", function($q, $http) {

  function MovieFactory(movie) {

    // Return a promise for our async XHR
    return $q(function(resolve, reject) {
    	
      // Perform some asynchronous operation, resolve or reject 
      // the promise when appropriate.
      $http.get(movie)
      .success(
        function (moviesObj) {
          resolve(moviesObj);
          // console.log("moviesObj", moviesObj);
        },function(error) {
          reject(error);
          console.log("Error:", error);
        }
      );
    });
  }
  return MovieFactory;
});