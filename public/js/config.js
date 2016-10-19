console.log('chargement de config.js');
app.config(function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'pret.html', controller: 'donateCtrl'})
    .when('/dettes', {templateUrl: 'dettes.html', controller: 'paybackCtrl'})
    .otherwise({redirectTo:'/'});
});
