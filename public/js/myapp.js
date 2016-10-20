console.log('chargement de Myapp.js');
var app = angular.module('myApp', ['ngRoute']);
//création d'un service pour lier des donnée entre deux controller

//Mise en commun json files
app.factory('dealFactory', function($http){

    var factory = {

        depenses: $http.get('db/depenses.json').then(function(reponse){
        reponse.data.records;
            console.log(factory);
        }),

        getUsers: function(){
            return factory;
        },

        getMoney: function(){
            return depenses.money;
        }
    }
    return factory;
});
/*app.factory('postFactory',function(){
  var factory = {
        posts:[
        ],
        getPosts: function(){
          return factory.posts;
        },
        getPost: function(id){
          var post = {};
          angular.forEach(factory.posts, function(value, key){
            if(value.id == id){
                console.log('value id' + value)
                post = value.id;
                console.log('post'+post);
              }
          });
          return post;
        },
    }
  return factory;
})*/


// Controller to manage donatation
app.controller('creditCtrl', function($scope, $http, $route, dealFactory){
    //$http.get('db/depenses.json').then(function(reponse){
        //$scope.money = reponse.data.records;
        $scope.money = dealFactory.getMoney();
    });
//});


//Controller to manage payback
app.controller('paybackCtrl', function($scope,$http, $route, dealFactory){
     $http.get('db/users.json').then(function(reponse){
        $scope.users = reponse.data.records;
    });
});





/*

app.controller('depensesCtrl', function ($scope, $http) {
    $http.get("Data/depenses.json").then(function (response) {
        $scope.myData = response.data.records;
    });
});

*/



/*app.factory('postFactory',function(){
  var factory = {
      users: false,
    user= $http.get('/db')  ,

    getUsers: function(){
      return factory.posts;
    },
    //ma fonction pour parcourir un user
    getUser: function(id){
      var user = {};
      angular.forEach(factory.users, function(value, key){
        if(value.id == id){
            console.log('value id' + value)
            post = value.id;
            console.log('user'+ user);
          }
      });
      return post;
    },
  }
  return factory;
})

// controller to manage posts
app.controller('postsCtrl', function($scope, postFactory){
  $scope.posts = postFactory.getPosts();
});
// controller to manage comments
app.controller('commentsCtrl', function($scope, postFactory, $routeParams){
  console.log($routeParams);
  $scope.comments = postFactory.getPost().comments;
});*/
