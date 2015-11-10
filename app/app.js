var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/404', {
      templateUrl: '/partials/404.html'
    })
    .otherwise('/404');
  $locationProvider.html5Mode(true);
});

