'use strict';

/**
 * @ngdoc overview
 * @name nixApp
 * @description
 * # nixApp
 *
 * Main module of the application.
 */
angular
  .module('nixApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'afOAuth2',
    'treeControl',
    'ngMaterial',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ngStorage',
    'ngWebSocket',
    'angularMoment',
    'ui.utils.masks',
    'pascalprecht.translate'
  ])
    .run(function(amMoment) {
      amMoment.changeLocale('es');
    })
    .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/notificaciones', {
        templateUrl: 'views/notificaciones.html',
        controller: 'NotificacionesCtrl',
        controllerAs: 'notificaciones'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/listar_requisitos', {
        templateUrl: 'views/views/tesoreria/avances/requisitos/listar_requisitos.html',
        controller: 'ListarRequisitosCtrl',
        controllerAs: 'listarRequisitos'
      })
      .when('/agregar_requisito', {
        templateUrl: 'views/views/tesoreria/avances/requisitos/agregar_requisito.html',
        controller: 'AgregarRequisitoCtrl',
        controllerAs: 'agregarRequisito'
      })
      .when('/editar_requisito', {
        templateUrl: 'views/views/tesoreria/avances/requisitos/editar_requisito.html',
        controller: 'EditarRequisitoCtrl',
        controllerAs: 'editarRequisito'
      })
      .when('/listar_tipos_avance', {
        templateUrl: 'views/tesoreria/avances/tipos_avance/listar_tipos_avance.html',
        controller: 'ListarTiposAvanceCtrl',
        controllerAs: 'listarTiposAvance'
      })
      .when('/agregar_tipos_avance', {
        templateUrl: 'views/tesoreria/avances/tipos_avance/agregar_tipos_avance.html',
        controller: 'AgregarTiposAvanceCtrl',
        controllerAs: 'agregarTiposAvance'
      })
      .when('/editar_tipos_avance', {
        templateUrl: 'views/tesoreria/avances/tipos_avance/editar_tipos_avance.html',
        controller: 'EditarTiposAvanceCtrl',
        controllerAs: 'editarTiposAvance'
      })
      .when('/listar_requisitos_avance/:tipoId', {
        templateUrl: 'views/tesoreria/avances/requisitos_tipo_avance/listar_requisitos_avance.html',
        controller: 'ListarRequisitosAvanceCtrl',
        controllerAs: 'listarRequisitosAvance'
      })
      .when('/agregar_requisito_avance', {
        templateUrl: 'views/tesoreria/avances/requisitos_tipo_avance/agregar_requisito_avance.html',
        controller: 'AgregarRequisitoAvanceCtrl',
        controllerAs: 'agregarRequisitoAvance'
      })
      .when('/editar_requisito_avance/:tipoId/:reqId', {
        templateUrl: 'views/tesoreria/avances/requisitos_tipo_avance/editar_requisito_avance.html',
        controller: 'EditarRequisitoAvanceCtrl',
        controllerAs: 'editarRequisitoAvance'
      })
      .when('/listar_solicitud_avance', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/listar_solicitud_avance.html',
        controller: 'ListarSolicitudAvanceCtrl',
        controllerAs: 'listarSolicitudAvance'
      })
      .when('/agregar_solicitud_avance', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/agregar_solicitud_avance.html',
        controller: 'AgregarSolicitudAvanceCtrl',
        controllerAs: 'agregarSolicitudAvance'
      })
      .when('/consultar_solicitud_avance/:vig/:IdSol', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/consultar_solicitud_avance.html',
        controller: 'ConsultarSolicitudAvanceCtrl',
        controllerAs: 'consultarSolicitudAvance'
      })
      .when('/agregar_tipo_avance_solicitud/:vig/:IdSol ', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/agregar_tipo_avance_solicitud.html',
        controller: 'AgregarTipoAvanceSolicitudCtrl',
        controllerAs: 'agregarTipoAvanceSolicitud'
      })
      .when('/cancelar_solicitud_avance/:opc/:vig/:IdSol', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/cancelar_solicitud_avance.html',
        controller: 'CancelarSolicitudAvanceCtrl',
        controllerAs: 'cancelarSolicitudAvance'
      })
      .when('/listar_verificar_avance', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/listar_verificar_avance.html',
        controller: 'ListarVerificarAvanceCtrl',
        controllerAs: 'listarVerificarAvance'
      })
      .when('/verificar_solicitud_avance/:vig/:IdSol', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/verificar_solicitud_avance.html',
        controller: 'VerificarSolicitudAvanceCtrl',
        controllerAs: 'verificarSolicitudAvance'
      })
      .when('/listar_certificar_avance', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/listar_certificar_avance.html',
        controller: 'ListarCertificarAvanceCtrl',
        controllerAs: 'listarCertificarAvance'
      })
      .when('/certificar_necesidad_avance/:vig/:IdSol', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/certificar_necesidad_avance.html',
        controller: 'CertificarNecesidadAvanceCtrl',
        controllerAs: 'certificarNecesidadAvance'
      })
      .when('/certificar_aprueba_avance/:vig/:IdSol', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/certificar_aprueba_avance.html',
        controller: 'CertificarApruebaAvanceCtrl',
        controllerAs: 'certificarApruebaAvance'
      })
      .when('/certificar_giro_avance/:vig/:IdSol', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/certificar_giro_avance.html',
        controller: 'CertificarGiroAvanceCtrl',
        controllerAs: 'certificarGiroAvance'
      })
      .when('/listar_legalizar_avance', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/listar_legalizar_avance.html',
        controller: 'ListarLegalizarAvanceCtrl',
        controllerAs: 'listarLegalizarAvance'
      })
      .when('/certificar_giro_avance/:vig/:IdSol', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/certificar_giro_avance.html',
        controller: 'certificarGiroAvanceCtrl',
        controllerAs: 'certificarGiroAvance'
      })
      .when('/verificar_soportes_avance/:vig/:IdSol', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/verificar_soportes_avance.html',
        controller: 'VerificarSoportesAvanceCtrl',
        controllerAs: 'verificarSoportesAvance'
      })
      .when('/certifica_avance', {
        templateUrl: 'views/tesoreria/avances/solicitud_avance/listar_certificar_avance.html',
        controller: 'CertificaAvanceCtrl',
        controllerAs: 'certificaAvance'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
