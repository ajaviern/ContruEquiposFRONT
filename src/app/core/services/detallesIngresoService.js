/**
 * Created by Erley on 16/11/2016.
 */

(function () {
  'use strict';

  angular.module('app.detallesIngreso')
    .factory('detallesIngresoService', detallesIngresoService);

  function detallesIngresoService($http, $q){
    var url = "http://localhost/ConstruEquiposBACK/public";
    var equiposServiceFactory = {};

    var pedido =null;

    var setPedido = function (data) {
     pedido = angular.copy(data);
    };

    var getPedido = function () {
         return angular.copy(pedido);
    };
      var IngresoEquipos = function (getData) {
          return $http({
              method: 'POST',
              url: url + '/api/DetallesIngresos',
              data: getData
          });
      };


    equiposServiceFactory.setPedido = setPedido;
    equiposServiceFactory.getPedido = getPedido;
    equiposServiceFactory.IngresoEquipos = IngresoEquipos;



    return equiposServiceFactory;

  }

})();
