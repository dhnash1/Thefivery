console.log("JS");

var app = angular.module('app', ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
  $routeProvider
    .when("/gita" , {
      templateUrl : 'views/gita.html',
      controller : 'Gita'
    })
    .when("/sponge" , {
      templateUrl : 'views/sponge.html',
      controller : 'Spongebob'
    })
    .when("/todd" , {
      templateUrl : 'views/todd.html',
      controller : 'Todd'
    })
    .otherwise({
      redirectTo : "/index"
    });


}]);
  app.factory("theFivery", function(){
    var myFivery = {};

    myFivery.gValue = 0;
    myFivery.sValue = 0;
    myFivery.tValue = 0;
    myFivery.rand = function(){
        var x = parseInt((Math.random() * 10) + 1);
        return x;
    };
    myFivery.giveFive = function(chall){
      var userFive = parseInt((Math.random() * 10) + 1);
      if (userFive >= chall) {
        console.log("WIN with", userFive);
        return true;
      }else{
        console.log("YOU FAILED WITH", userFive);
        return false;
      }
    };
        return myFivery;
  });

  app.controller('Gita', ["$scope", "$http", "theFivery", function($scope, $http, theFivery){
    $scope.wins = theFivery.gValue;
    var skillz = (theFivery.rand());
    console.log(skillz);
    $scope.clicky = function(){
       if(theFivery.giveFive(skillz)){
          theFivery.gValue++;
          console.log("wins:", theFivery.gValue);
       }else{
         alert("Up high, Down low, Too slow");
       }
       $scope.wins = theFivery.gValue;
     };
}]);

  app.controller('Spongebob', ["$scope", "$http", "theFivery",  function($scope, $http, theFivery){
    $scope.wins = theFivery.sValue;
    var skillz = (theFivery.rand());
    console.log(skillz);
    $scope.clicky = function(){
       if(theFivery.giveFive(skillz)){
          theFivery.sValue++;
          console.log("wins:", theFivery.sValue);
       }else{
         alert("Up high, Down low, Too slow");
       }
       $scope.wins = theFivery.sValue;
     };
}]);

  app.controller('Todd', ["$scope", "$http", "theFivery", function($scope, $http, theFivery){
    $scope.wins = theFivery.tValue;
    var skillz = (theFivery.rand());
    console.log(skillz);
    $scope.clicky = function(){
       if(theFivery.giveFive(skillz)){
          theFivery.tValue++;
          console.log("wins:", theFivery.tValue);
       }else{
         alert("Up high, Down low, Too slow");
       }
       $scope.wins = theFivery.tValue;
     };

}]);
