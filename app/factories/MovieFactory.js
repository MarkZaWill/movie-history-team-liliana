"use strict";


MovieApp.factory("makeMovies", ($q, $http) =>
  function makeMovies () {
    return $q((resolve, reject) => // Return a promise for our async XHR
      $http
        .get("https://moviehistbnc.firebaseio.com/movies.json")
        .success(
          movieCollection => 
            {resolve(movieCollection)
              console.log("SUCCESS", movieCollection);},
          error => reject(error)
        )
    )
    return makeMovies
});

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