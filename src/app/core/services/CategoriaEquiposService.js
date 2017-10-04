/**
 * Created by Javier Nuñez on 7/08/2017.
 */
(function () {
    'use strict';

    angular.module('app.equipos')
        .factory('CategoriaEquiposService', CategoriaEquiposService);

    function CategoriaEquiposService($http, $q){
        var url = "http://localhost/ConstruEquiposBACK/public";
        var CategoriaequiposServiceFactory = {};

        var createCategoriaEquipo = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/categoriaequipo',
                data: getData
            });
        };

        var getCategoriaEquipo = function (getData) {
            return $http({
                method: 'GET',
                url: url + '/api/categoriaequipo',
                data: getData
            });
        };

        var EditCategoriaEquipos = function (getData) {
            //cuando se envia data se usa esta funcion
            return $http({
                method: 'POST',
                url: url + '/api/categoriaequipo',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData // aqui se le envia la data
            });
        };

        var getAllCategoriaEquipos = function () {
            //cuando No se envia data se usa esta funcion
            return $http({
                method: 'GET',
                url: url + '/api/categoriaequipo'
            });
        }

        var EliminarCategoriaEquipos = function (cod) {
            return $http({
                method: 'DELETE',
                url: url + '/api/categoriaequipo/' + cod
            });

        }
        CategoriaequiposServiceFactory.createCategoriaEquipo = createCategoriaEquipo;
        CategoriaequiposServiceFactory.getCategoriaEquipo = getCategoriaEquipo;
        CategoriaequiposServiceFactory.getAllCategoriaEquipos = getAllCategoriaEquipos;
        CategoriaequiposServiceFactory.EditCategoriaEquipos = EditCategoriaEquipos;
        CategoriaequiposServiceFactory.EliminarCategoriaEquipos = EliminarCategoriaEquipos;

        return CategoriaequiposServiceFactory;

    }
})();

