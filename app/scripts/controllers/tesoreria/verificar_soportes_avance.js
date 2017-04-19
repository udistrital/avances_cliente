'use strict';

/**
 * @ngdoc function
 * @name nixApp.controller:VerificarSoportesAvanceCtrl
 * @description
 * # VerificarSoportesAvanceCtrl
 * Controller of the nixApp
 */
angular.module('nixApp')
  .controller('VerificarSoportesAvanceCtrl', function($scope, $http, $routeParams, $filter, CONF) {
    $scope.title = 'Legalización de Avances';
    $scope.message = 'Verificar Soportes';

    var idsolicitud = $routeParams.IdSol;
    var vigencia = $routeParams.vig;

    /*****Funcion para mostrar el calendario******/
    $('#datepicker').datepicker().on('changeDate', function(ev) {
      var element = angular.element($('#datepicker'));
      var controller = element.controller();
      var scope = element.scope();
      var datetime = $filter('date')(ev.date, 'yyyy-MM-dd')
      scope.$apply(function() {
        scope.asignarFecha(datetime);
      });
    });

    $scope.asignarFecha = function(fecha) {
      $scope.solicitudAvance.Presupuesto.FechaCertificacion = fecha;
    };


    /******busca datos de solicitud y asigna al array principal el tipo de avance*******/
    $http.get(CONF.HOST_SOLICITUD_AVANCE + '/solicitud/' + vigencia + '/' + idsolicitud + '/0')
      .then(function(response) {
        //alert(JSON.stringify(response))
        //alert(response.data[0].Vigencia);
        $scope.solicitudAvance = {
          Solicitud: {
            Vigencia: response.data[0].Vigencia,
            Consecutivo: response.data[0].Consecutivo,
            Objetivo: response.data[0].Objetivo,
            Justificacion: response.data[0].Justificacion,
            ValorTotal: response.data[0].ValorTotal,
            CodigoDependencia: response.data[0].CodigoDependencia,
            Dependencia: response.data[0].Dependencia,
            CodigoFacultad: response.data[0].CodigoFacultad,
            Facultad: response.data[0].Facultad,
            CodigoProyectoCur: response.data[0].CodigoProyectoCur,
            ProyectoCurricular: response.data[0].ProyectoCur,
            CodigoConvenio: response.data[0].CodigoConvenio,
            Convenio: response.data[0].Convenio,
            CodigoProyectoInv: response.data[0].CodigoProyectoInv,
            ProyectoInv: response.data[0].ProyectoInv,
            EstadoActual: response.data[0].EstadoActual
          },
          Beneficiario: {
            IdBeneficiario: response.data[0].IdBeneficiario,
            Nombre: response.data[0].Nombre,
            Apellido: response.data[0].Apellido,
            TipoDocumento: response.data[0].TipoDocumento,
            Documento: response.data[0].Documento,
            LugarDocumento: response.data[0].LugarDocumento,
            Direccion: response.data[0].Direccion,
            Correo: response.data[0].Correo,
            Telefono: response.data[0].Telefono,
            Celular: response.data[0].Celular
          },
          Estadosolicitud: {
            Usuario: 'system'
          },
        };
        //busca las solicitudes de avance del beneficiario
        $http.get(CONF.HOST_SOLICITUD_AVANCE + '/solicitudAvanceBeneficiario/' + vigencia + '/' + response.data[0].IdSolicitud + '/' + response.data[0].IdBeneficiario)
          .then(function(responseBen) {
            //alert(JSON.stringify(responseBen));
            var solicitudes = $filter('filter')(responseBen.data, {
              "NombreEstado": "!Legalizado"
            });
            solicitudes = $filter('filter')(solicitudes, {
              "NombreEstado": "!Cancelado"
            });
            var count = Object.keys(solicitudes).length;
            $scope.solicitudAvance.Beneficiario.Pendientes = count;
          });
        /******busca datos y asigna al array principal el tipo de avance*******/
        var idsolicitud = parseInt(response.data[0].IdSolicitud);
        $http.get(CONF.HOST_SOLICITUD_AVANCE + '/tiposAvance/' + vigencia + '/' + idsolicitud + '/0')
          .then(function(responseTipo) {
            //alert(JSON.stringify(responseTipo))
            /*Variable auxiliar ayuda a la asignacion al array*/
            //var aux = 0;
            $scope.solicitudAvance.TipoAvance = responseTipo.data;
            /******busca datos de requisitos y asigna al array principal el tipo de avance*******/
            angular.forEach($scope.solicitudAvance.TipoAvance, function(tipoAvance, aux) {
              var idtipo = parseInt(tipoAvance.IdTipo);
              $scope.solicitudAvance.TipoAvance[aux].Requisitos = [];
              $http.get(CONF.HOST_SOLICITUD_AVANCE + '/requisitosSolicitudAvance/' + vigencia + '/' + idsolicitud + '/' + idtipo)
                .then(function(responseReq) {
                  //alert(aux+JSON.stringify(responseReq))
                  $scope.solicitudAvance.TipoAvance[aux].Requisitos = $filter('filter')(responseReq.data, {
                    "EtapaReq": "legalizar"
                  });
                  //$scope.solicitudAvance.TipoAvance[aux].Requisitos=responseReq.data;
                  aux++;
                });
            });
          });

        /*****busca los datos de financiacion del avance*******/
        $http.get(CONF.HOST_SOLICITUD_AVANCE + '/financiaAvance/' + vigencia + '/' + response.data[0].IdSolicitud + '/0')
          .then(function(responseFin) {
            //alert(JSON.stringify(responseFin));
            if (responseFin.data[0]) {
              $scope.solicitudAvance.Presupuesto = responseFin.data[0];
            }
          });

      });

    $scope.addSoporte = function() {
      var soporteAvance = [];
      var reg = 0;
      angular.forEach($scope.solicitudAvance.TipoAvance, function(tipoAvance, aux) {
        var idtipo = parseInt(tipoAvance.IdTipo);
        var idsolicitud = parseInt(tipoAvance.IdSolicitud);
        angular.forEach($scope.solicitudAvance.TipoAvance[aux].Requisitos, function(requisitoAvance) {
          var idreq = parseInt(requisitoAvance.IdReq);
          soporteAvance[reg] = {
            IdTipo: idtipo,
            IdReq: idreq,
            IdSolicitud: idsolicitud,
            Estado: $scope.solicitudAvance.TipoAvance[aux].Estado,
            FechaRegistro: $scope.solicitudAvance.TipoAvance[aux].FechaRegistro,
            ReferenciaAvn: $scope.solicitudAvance.TipoAvance[aux].Referencia,
            NombreAvn: $scope.solicitudAvance.TipoAvance[aux].Nombre,
            ReferenciaReq: $scope.solicitudAvance.TipoAvance[aux].ReferenciaReq,
            NombreReq: $scope.solicitudAvance.TipoAvance[aux].NombreReq,
            DescripcionReq: $scope.solicitudAvance.TipoAvance[aux].DescripcionReq,
            EtapaReq: $scope.solicitudAvance.TipoAvance[aux].EtapaReq,
            Valido: requisitoAvance.Valido,
            Observaciones: requisitoAvance.Observaciones,
            FechaRegistroReq: '',
            Documento: requisitoAvance.documento,
            EstadoReq: '',
            UbicacionDoc: '',
            Usuario: $scope.solicitudAvance.Estadosolicitud.Usuario
          };
          reg++;
        });
      });
      //alert(JSON.stringify(verificaAvance))
      $http.post(CONF.HOST_LEGALIZAR_AVANCE + '/verificasoporte', soporteAvance)
        .then(function(info) {
          alert("Se registró la verificación del soporte");
          console.log(info);
        });
      $scope.solicitudAvance = {};
      window.location = "#/listarLegalizarAvance";
    }; //fin addGiro
  });
