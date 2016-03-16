"use strict";


MovieApp.factory("MovieFactory", ($q, $http) =>
  () =>
    $q((resolve, reject) => // Return a promise for our async XHR
      $http
        .get("http://img.omdbapi.com/?apikey=7c212437")
        .success(
          moviesObj => resolve(moviesObj),
          console.log("Movies:", moviesObj),
          error => reject(error)
        )
    )
);