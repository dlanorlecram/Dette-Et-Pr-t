//console.log('chargement de config.js');
app.config(function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'credit.html', controller: 'creditCtrl'})
    .when('/credit', {templateUrl: 'credit.html', controller: 'creditCtrl','creditCtrl'})
    .when('/payback', {templateUrl: 'payback.html', controller: 'creditCtrl','paybackCtrl'})
    //.when('/totals', {templateUrl: 'payback.html', controller: 'paybackCtrl'})
    .otherwise({redirectTo:'/'});
});
