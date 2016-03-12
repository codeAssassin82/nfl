'use strict';

var app = angular.module('routingApp');

app.service('NflService', function($http) {

//this.player = []


  this.getPlayer = function() {
     $http.jsonp('http://www.fantasyfootballnerd.com/service/players/json/6ntduueu7ha9/QB?callback=JSON_CALLBACK')
     .then(res => {


console.log(res);
//      SwapiService.player
       this.position = res.data.results;

     }, err => {
       console.error('NflService error:', err);
     })
  };


});
