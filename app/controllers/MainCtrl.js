"use strict";

MovieApp.controller("MainCtrl",
[
  "$scope",
  "$location",
  "$http",
  "authFactory",

  function ($scope, $location, $http, authFactory) {

    // Local variables
    let ref = new Firebase("https://moviehistbnc.firebaseio.com/");

    $scope.isAuthenticated = () => {
      return authFactory.isAuthenticated();
    };

    /*
      Attempt to register a new user account.
      If successful, immediately log user in.
     */
    $scope.logout = () => {
      console.log("User is Logged Out.");
      ref.unauth();
    };

  }
]);