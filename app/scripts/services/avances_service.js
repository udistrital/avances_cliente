'use strict';

/**
 * @ngdoc service
 * @name nixApp.avancesService
 * @description
 * # avancesService
 * Factory in the nixApp.
 */
angular.module('nixApp')
  .factory('avancesRequest', function ($http, CONF) {
    return {
      get: function(tabla, params) {
        console.log(tabla);
        return $http.get(CONF.HOST + tabla + "/?" + params);
      },
      post: function(tabla, elemento) {
        return $http.post(CONF.HOST + tabla, elemento);
      },
      put: function(tabla, id, elemento) {
        return $http.put(CONF.HOST + tabla + "/" + id, elemento);
      },
      delete: function(tabla, id) {
        return $http.delete(CONF.HOST + tabla + "/" + id);
      }
    };
  });
