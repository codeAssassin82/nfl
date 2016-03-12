'use strict';

var app = angular.module('routingApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // .state(stateName,  obj. makes the characteristics of the state)

    .state('main', {url: '/', templateUrl: '/html/main.html'})
    .state('stats', {url: '/stats', templateUrl: '/html/stats.html', controller: 'statsCtrl' })
    .state('poplayer', {url: '/player', templateUrl: '/html/player.html', controller: 'playerCtrl' })

    $urlRouterProvider.otherwise('/');
});
app.run(function(NflService) {

  NflService.getPlayer();

  console.log('app.run!!!');
}); // closes thing to init
