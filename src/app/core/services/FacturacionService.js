/**
 * Created by Erley on 16/11/2016.
 */

(function () {
  'use strict';

  angular.module('app.facturacion')
    .factory('FacturacionService', FacturacionService);

  function FacturacionService($http, $q){
    var url = "http://localhost/ConstruEquiposBACK/public";
    var equiposServiceFactory = {};

    var pedido =null;

    var setPedido = function (data) {
     pedido = angular.copy(data);
    };

    var getPedido = function () {
         return angular.copy(pedido);
    };



    equiposServiceFactory.setPedido = setPedido;
    equiposServiceFactory.getPedido = getPedido;


    return equiposServiceFactory;

  }

})();
