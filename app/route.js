var sampleApp = angular.module('sampleApp', ["ngRoute"]);
sampleApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider

  .when("/name", {
    templateUrl : "name.html",
    controller : "nameCtrl"
  })
  .when("/email", {
    templateUrl : "email.html",
    controller : "emailCtrl"
  });
});
app.controller("nameCtrl", function ($scope) {
  $scope.hello = function()
  {
      alert.apply("hgh");
  }
});
app.controller("emailCtrl", function ($scope) {
  $scope.msg = "email";
});
