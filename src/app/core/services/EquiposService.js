/**
 * Created by EspañaNet on 21/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteEquipo')
        .factory('EquiposService', EquiposService);

    function EquiposService($http, $q){
        var url = "http://localhost/ConstruEquiposBACK/public";
        var equiposServiceFactory = {};

        var createEquipo = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/equipo',
                data: getData
            });
        };

        var getEquipo = function (getData) {
            return $http({
                method: 'GET',
                url: url + '/api/equipo',
                data: getData
            });
        };

        var EditEquipos = function (getData) {
            //cuando se envia data se usa esta funcion
            return $http({
                method: 'POST',
                url: url + '/api/equipo',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData // aqui se le envia la data
            });
        };

        var getAllEquipos = function () {
            //cuando No se envia data se usa esta funcion
            return $http({
                method: 'GET',
                url: url + '/api/equipo'
            });
        }

        var EliminarEquipos = function (cod) {
            return $http({
                method: 'DELETE',
                url: url + '/api/equipo/' + cod
            });

        }
        equiposServiceFactory.createEquipo = createEquipo;
        equiposServiceFactory.getEquipo = getEquipo;
        equiposServiceFactory.getAllEquipos = getAllEquipos;
        equiposServiceFactory.EditEquipos = EditEquipos;
        equiposServiceFactory.EliminarEquipos = EliminarEquipos;

        return equiposServiceFactory;

    }
})();

