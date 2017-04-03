'use strict';

/**
 * @ngdoc function
 * @name nixApp.controller:CertificaAvanceCtrl
 * @description
 * # CertificaAvanceCtrl
 * Controller of the nixApp
 */
angular.module('nixApp')
  .controller('CertificaAvanceCtrl', function($scope, $http, $routeParams, $filter, vigencia, CONF) {

    $scope.title = 'Certificación Solicitud de Avance';
    $scope.message = 'Listado de Solicitudes de Avance';
    vigencia.vigencia = vigencia.vigencia_actual;
    $scope.vigencias = [{
      vig: (vigencia.vigencia - 1)
    }, {
      vig: vigencia.vigencia
    }];
    //busca datos del tipo de avance
    $http.get(CONF.HOST_SOLICITUD_AVANCE + '/lista/' + vigencia)
      .then(function(response) {
        //alert(JSON.stringify(response))
        var solicitudes = $filter('filter')(response.data, {
          "EstadoActual": "!Registrado"
        });
        solicitudes = $filter('filter')(solicitudes, {
          "EstadoActual": "!Cancelado"
        });
        solicitudes = $filter('filter')(solicitudes, {
          "EstadoActual": "!Legalizado"
        });
        solicitudes = $filter('filter')(solicitudes, {
          "EstadoActual": "!Girado"
        });
        $scope.solicitud = solicitudes;
      });

    $scope.selectVigencia = function(vige) {
      $scope.solicitud = '';
      $http.get(CONF.HOST_SOLICITUD_AVANCE + '/lista/' + vige)
        .then(function(response) {
          //alert(JSON.stringify(response))
          var solicitudes = $filter('filter')(response.data, {
            "EstadoActual": "!Registrado"
          });
          solicitudes = $filter('filter')(solicitudes, {
            "EstadoActual": "!Cancelado"
          });
          solicitudes = $filter('filter')(solicitudes, {
            "EstadoActual": "!Legalizado"
          });
          solicitudes = $filter('filter')(solicitudes, {
            "EstadoActual": "!Girado"
          });
          $scope.solicitud = solicitudes;
        });
    };
  });
