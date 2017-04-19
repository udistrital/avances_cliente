"use strict";

/**
 * @ngdoc function
 * @name nixApp.decorator:TextTranslate
 * @description
 * # TextTranslate
 * Decorator of the nixApp
 */
var text_es = {
  TITULO: "GENERATOR-OAS",
  MENSAJE_INICIAL: "Ahora puede comenzar con el desarrollo ...",
  //listar_legalizar_avance
  TITULO_LEGALIZACION_AVANCE:"Legalización de Avance",
  LISTADO_AVANCES: "Listado de Avances",
  VIGENCIA:"Vigencia",
  CONSECUTIVO:'Consecutivo',
  OBJETIVO:'Objetivo',
  VALOR_TOTAL:'Valor Total',
  BENEFICIARIO:'Beneficiario',
  ESTADO_ACTUAL:'Estado Actual',
  FECHA_CERTIFICACION_GIRO:'Fecha Certificación Giro',
  FECHA_LIMITE_LEGALIZAR:'Fecha Limite para Legalizar',
  OBSERVACIONES:'Observaciones',
  OPCIONES:'Opciones',
  ULTIMO_DIA_VERIFICAR:'Ultimo día para legalizar!',
  LEGALIZACION:'Legalización con ' ,
  DIAS_RETRASO: ' dias de retraso!',
  BTN:{
    VERIFICAR_SOPORTES:'Verificar Soportes',
    LEGALIZAR: 'Legalizar'
  }
  //
};

var text_en = {
  TITULO: "GENERATOR-OAS",
  MENSAJE_INICIAL: "Now get to start to develop ..."
};

angular.module('nixApp')
  .config(function($translateProvider) {
    $translateProvider
      .translations("es", text_es)
      .translations("en", text_en);
    $translateProvider.preferredLanguage("es");
    $translateProvider.useSanitizeValueStrategy("sanitizeParameters");
  });
