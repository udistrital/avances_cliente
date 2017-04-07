'use strict';

/**
 * @ngdoc function
 * @name nixApp.controller:CertificarGiroAvanceCtrl
 * @description
 * # CertificarGiroAvanceCtrl
 * Controller of the nixApp
 */
angular.module('nixApp')
  .controller('CertificarGiroAvanceCtrl', function($scope, $http, $routeParams, $filter, CONF, sicapitalRequest) {
    $scope.title = 'Solicitud de Avance';
    $scope.message = 'Certificar Giro';

    $scope.asignarFecha = function(fecha) {
      $scope.solicitud_avance.Presupuesto.FechaCertificacion = fecha;
    };
    /*****Funcion para mostrar el calendario******/
    $('#datepicker').datepicker().on('changeDate', function(ev) {
      var element = angular.element($('#datepicker'));
      var controller = element.controller();
      var scope = element.scope();
      var datetime = $filter('date')(ev.date, 'yyyy-MM-dd')
      scope.$apply(function() {
        $scope.asignarFecha(datetime);
      });
    });



    var idsolicitud = $routeParams.idSol;
    var vigencia = $routeParams.vig;




    /******busca datos de solicitud y asigna al array principal el tipo de avance*******/
    $http.get(CONF.HOST_SOLICITUD_AVANCE + '/solicitud/' + vigencia + '/' + idsolicitud + '/0')
      .then(function(response) {
        //alert(JSON.stringify(response))
        //alert(response.data[0].Vigencia);
        $scope.solicitud_avance = {
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
        $http.get(CONF.HOST_SOLICITUD_AVANCE + '/solicitud_avanceBeneficiario/' + vigencia + '/' + response.data[0].IdSolicitud + '/' + response.data[0].IdBeneficiario)
          .then(function(responseBen) {
            //alert(JSON.stringify(responseBen));
            var solicitudes = $filter('filter')(responseBen.data, {
              "NombreEstado": "!Legalizado"
            });
            solicitudes = $filter('filter')(solicitudes, {
              "NombreEstado": "!Cancelado"
            });
            var count = Object.keys(solicitudes).length;
            $scope.solicitud_avance.Beneficiario.Pendientes = count;
          });
        /******busca datos y asigna al array principal el tipo de avance*******/
        var idsolicitud = parseInt(response.data[0].IdSolicitud);
        $http.get(CONF.HOST_SOLICITUD_AVANCE + '/tiposAvance/' + vigencia + '/' + idsolicitud + '/0')
          .then(function(responseTipo) {
            //alert(JSON.stringify(responseTipo))
            /*Variable auxiliar ayuda a la asignacion al array*/
            $scope.solicitud_avance.TipoAvance = responseTipo.data;
            /******busca datos de requisitos y asigna al array principal el tipo de avance*******/
            angular.forEach($scope.solicitud_avance.TipoAvance, function(tipoAvance, aux) {
              var idtipo = parseInt(tipoAvance.IdTipo);
              $scope.solicitud_avance.TipoAvance[aux].Requisitos = [];
              $http.get(CONF.HOST_SOLICITUD_AVANCE + '/requisitossolicitud_avance/' + vigencia + '/' + idsolicitud + '/' + idtipo)
                .then(function(responseReq) {
                  //alert(aux+JSON.stringify(responseReq))
                  $scope.solicitud_avance.TipoAvance[aux].Requisitos = $filter('filter')(responseReq.data, {
                    "EtapaReq": "solicitar"
                  });
                  //$scope.solicitud_avance.TipoAvance[aux].Requisitos=responseReq.data;
                  aux++;
                });
            });
          });

        /*****busca los datos de financiacion del avance*******/
        $http.get(CONF.HOST_SOLICITUD_AVANCE + '/financiaAvance/' + vigencia + '/' + response.data[0].IdSolicitud + '/0')
          .then(function(responseFin) {
            //alert(JSON.stringify(responseFin));
            if (responseFin.data[0]) {
              $scope.solicitud_avance.Presupuesto = responseFin.data[0];
              /******Busca el certificado de disponibilidad relacionado a la necesidad******/
              sicapitalRequest.get('/ordenpago/opcdp/' + $scope.solicitud_avance.Solicitud.Vigencia + '/' + $scope.solicitud_avance.Presupuesto.Disponibilidad.toString())
                .then(function(responseOP) {
                  //alert(JSON.stringify(responseOP.data[0]));
                  $scope.disponibilidad = responseOP.data[0];
                  if (!$scope.disponibilidad) {
                    $scope.solicitud_avance.Presupuesto.Registro = "";
                    $scope.solicitud_avance.Presupuesto.OrdenPago = "";
                  } else {
                    $scope.solicitud_avance.Presupuesto.Registro = $scope.disponibilidad.REGISTROPRESUPUESTAL;
                    $scope.solicitud_avance.Presupuesto.ValorRegistro = $scope.disponibilidad.VALOR_CRP;
                    $scope.solicitud_avance.Presupuesto.FechaRegistro = $scope.disponibilidad.FECHAREGISTRO;
                    $scope.solicitud_avance.Presupuesto.Compromiso = $scope.disponibilidad.NUMEROCOMPROMISO;
                    $scope.solicitud_avance.Presupuesto.OrdenPago = $scope.disponibilidad.ORDENPAGO;
                    $scope.solicitud_avance.Presupuesto.ValorOrden = $scope.disponibilidad.VALORORDEN;
                    $scope.solicitud_avance.Presupuesto.FechaOrden = $scope.disponibilidad.FECHAORDEN;
                    $scope.solicitud_avance.Estadosolicitud.FechaCertificacion = $scope.disponibilidad.FECHAPAGO;
                  }
                });
            }
          });
      });

    $scope.addGiro = function() {
      console.log((JSON.stringify($scope.solicitud_avance))); //permite ver el arreglo que llega
      var data = {
        Presupuesto: {
          IdSolicitud: parseInt($scope.solicitud_avance.TipoAvance[0].IdSolicitud),
          Vigencia: $scope.solicitud_avance.Presupuesto.Vigencia,
          UnidadEjecutora: $scope.solicitud_avance.Presupuesto.UnidadEjecutora,
          InternoRubro: parseInt($scope.solicitud_avance.Presupuesto.InternoRubro),
          NombreRubro: $scope.solicitud_avance.Presupuesto.NombreRubro,
          NumeroNecesidad: parseInt($scope.solicitud_avance.Presupuesto.NumeroNecesidad),
          Objeto: $scope.solicitud_avance.Presupuesto.Objeto,
          ValorNecesidad: parseFloat($scope.solicitud_avance.Presupuesto.ValorNecesidad),
          FechaNecesidad: $scope.solicitud_avance.Presupuesto.FechaNecesidad,
          Disponibilidad: parseInt($scope.solicitud_avance.Presupuesto.Disponibilidad),
          FechaDisp: $scope.solicitud_avance.Presupuesto.FechaDisp,
          ValorDisp: parseFloat($scope.solicitud_avance.Presupuesto.ValorDisp),
          Registro: parseInt($scope.solicitud_avance.Presupuesto.Registro),
          FechaRegistro: $scope.solicitud_avance.Presupuesto.FechaRegistro,
          ValorRegistro: parseFloat($scope.solicitud_avance.Presupuesto.ValorRegistro),
          Compromiso: parseInt($scope.solicitud_avance.Presupuesto.Compromiso),
          OrdenPago: parseInt($scope.solicitud_avance.Presupuesto.OrdenPago),
          FechaOrden: $scope.solicitud_avance.Presupuesto.FechaOrden,
          ValorOrden: parseFloat($scope.solicitud_avance.Presupuesto.ValorOrden),
          FechaCertificacion: $scope.solicitud_avance.Presupuesto.FechaCertificacion
        },
        Estadosolicitud: {
          IdSolicitud: parseInt($scope.solicitud_avance.TipoAvance[0].IdSolicitud),
          Observaciones: $scope.solicitud_avance.Estadosolicitud.Observacion,
          Usuario: $scope.solicitud_avance.Estadosolicitud.Usuario
        },
      };
      //alert(JSON.stringify(data))
      $http.post(CONF.HOST_SOLICITUD_AVANCE + '/giroavance', data)
        .then(function(info) {
          //alert(JSON.stringify(info))
          if (info.status === CONF.POST_CODE) {
            swal(
              'Registro correcto',
              'Se registraron los datos correctamente!',
              'success'
            );
              window.location = "#/certifica_avance";
          }else{
            swal(
              'Ocurrió algo',
              'No se registraron los datos!',
              'danger'
            );
          }

        })

    }; //fin addGiro


  });
