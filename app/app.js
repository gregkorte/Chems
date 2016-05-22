var app = angular.module("Chems", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
    when('/periodic-table',{
      templateUrl: 'partials/periodic-table.html',
      controller: 'PeriodicTableCtrl'
    }).
    otherwise('/');
});