/**
 * Created by Javier Nuñez on 10/08/2017.
 */
(function () {
    'use strict';

    angular.module('app.producto')
        .factory('ProductosService', ProductosService);

    function ProductosService($http, $q) {
        var url = "http://localhost/ConstruEquiposBACK/public";
        var ProductosServiceFactory = {};

        var createProductos = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/producto',
                data: getData
            });
        };

        var getProductos = function (getData) {
            return $http({
                method: 'GET',
                url: url + '/api/producto',
                data: getData
            });
        };

        var EditProductos = function (getData) {
            //cuando se envia data se usa esta funcion
            return $http({
                method: 'POST',
                url: url + '/api/producto',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData // aqui se le envia la data
            });
        };

        var getAllProductos = function () {
            //cuando No se envia data se usa esta funcion
            return $http({
                method: 'GET',
                url: url + '/api/producto'
            });
        }

        var EliminarProductos = function (cod) {
            return $http({
                method: 'DELETE',
                url: url + '/api/producto/' + cod
            });
        }
        ProductosServiceFactory.createProductos = createProductos;
        ProductosServiceFactory.getProductos = getProductos;
        ProductosServiceFactory.getAllProductos = getAllProductos;
        ProductosServiceFactory.EditProductos = EditProductos;
        ProductosServiceFactory.EliminarProductos = EliminarProductos;

        return ProductosServiceFactory;

    }

})();
