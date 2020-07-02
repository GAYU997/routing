var app = angular.module("sample", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider

  .when("/menu1", {
    templateUrl : "templates/menu1.html"
  })
  .when("/menu2", {
    templateUrl : "templates/menu2.html"
  });
});
  