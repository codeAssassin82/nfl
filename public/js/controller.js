'use strict';

var app = angular.module('routingApp');

app.controller('statsCtrl', function($scope, $state) {
  console.log('statsCtrl!');
  $scope.Person = function(param) {
    console.log("param:", param);
    $state.go('poplayer', {
      personId: param
    });
  };
})
app.controller('playerCtrl', function($scope, NflService) {
  console.log('playerCtrl');
  // $scope.player = NflService.player;
  //watch this thing NflService.peop;

  $scope.$watch(function() { //watch function
    //return the thing to watch
    return NflService.player;
  }, function(newVal, oldVal) {//listerner function
    // triggered when the watched thign changes

    $scope.player = newVal;

  $scope.goHome = function() {
    console.log('state:', $state);
    $state.go('home');

  };
});
});
