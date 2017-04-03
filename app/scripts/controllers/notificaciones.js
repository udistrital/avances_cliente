'use strict';

/**
 * @ngdoc function
 * @name nixApp.controller:NotificacionesCtrl
 * @description
 * # NotificacionesCtrl
 * Controller of the nixApp
 */
angular.module('nixApp')
  .controller('NotificacionesCtrl', function($scope, notificacion) {
    $scope.imagePath = 'images/yeoman.png';
    $scope.notificacion = notificacion;
  });
