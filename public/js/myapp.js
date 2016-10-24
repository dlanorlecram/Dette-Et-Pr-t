//console.log('chargement de Myapp.js');
var app = angular.module('myApp', []);

// Controller to manage donatation
app.controller('creditCtrl', function($scope, $http){
    $http.get('db/depenses.json').then(function(reponse){
        $scope.money = reponse.data.records;
        //$scope.money = dealFactory.getDepenses();

    });
});

//Controller to manage payback
app.controller('paybackCtrl', function($scope, $http){
     $http.get('db/users.json').then(function(reponse){
        $scope.users = reponse.data.records;
        $scope.aUsers = [];
        //Generating array aUsers with structure [id => username]
        for($user in $scope.users){
          $scope.aUsers[$scope.users[$user].Id] = $scope.users[$user].username;
        }
        console.log($scope.aUser);
    });
});
