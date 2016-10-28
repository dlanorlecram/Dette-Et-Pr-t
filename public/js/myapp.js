//console.log('chargement de Myapp.js');
var app = angular.module('myApp', []);

// Controller to manage donatation
app.controller('creditCtrl', function($scope, $http, $rootScope){
    $http.get('db/depenses.json').then(function(reponse){
        $scope.depenses = reponse.data.records;
        //$scope.money = dealFactory.getDepenses();
        //Variable qui permet de créer le premier tableau à explorer.
                $scope.aConcernes = [];
                //Tableau qui stock les nom un par un et qui est ensuite join
                $scope.aConcernesElement = [];
                //Tableau avec la liste des noms mais le mauvais index
                $scope.aConcernesTrue = [];
                //Le bon tableau à utiliser
                $scope.aConcernesFinal = [];
                $scope.newDepense = {};
                $scope.mytxt="";

                $scope.addDepense = function(){
                  $scope.mytxt ="test";
                  console.log($scope.mytxt);
                  $scope.depenses.push($scope.newDepense);
                  //Et je réinitailise mon objet
                  $scope.newDepense = {};
                };
                  console.log($scope.depenses);
                  console.log($scope.newDepense);
                for($depense in $scope.depenses) {
                    //On crée le tableau à explorer (le split est important car il permet de rendre ce tableau exploitable pour la boucle suivante)
                    $scope.aConcernes[$depense] = $scope.depenses[$depense].Concernes.split(',');
                }

                //le $scope.aConcernes est un tableau qui contient des tableaux (2 niveaux, donc 2 boucles for)
                for ($i=0; $i < $scope.aConcernes.length; $i++) {
                    for ($x=0; $x < $scope.aConcernes[$i].length; $x++) {
                        //On transforme les ID en nom.
                        $scope.aConcernesElement.push($rootScope.aUsers[$scope.aConcernes[$i][$x]]);
                    }
                    //On join les nom pour obtenir une ligne qu'on assigne dans un tableau unique
                    $scope.aConcernesElement = $scope.aConcernesElement.join(", ");
                    $scope.aConcernesTrue.push($scope.aConcernesElement);
                    //On réinitialise la ligne pour faire une nouvelle
                    $scope.aConcernesElement = [];
                }

                //Cette boucle est pour créer un tableau qui a pour clés les ID des dépenses et pour valeur les lignes créer plus tôt.
                for($depense in $scope.depenses) {
                    $scope.aConcernesFinal[$scope.depenses[$depense].Id] = $scope.aConcernesTrue[$depense];
                }

    });
});

//Controller to manage payback
app.controller('paybackCtrl', function($scope, $http, $rootScope){
     $http.get('db/users.json').then(function(reponse){
        $scope.users = reponse.data.records;
        $rootScope.aUsers = [];
        $scope.newUser = {};
        //Generating array aUsers with structure [id => username]
        for($user in $scope.users){
          $rootScope.aUsers[$scope.users[$user].Id] = $scope.users[$user].username;
        }
        //add a newUser
        $scope.addUser = function(){
          $scope.users.push($scope.newUser);
          $scope.addUser = {};
        }
        console.log($scope.newUser);
        //add a newUsergroup
        console.log($rootScope.aUsers);
    });
});
