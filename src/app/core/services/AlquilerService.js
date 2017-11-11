/**
 * Created by Erley on 16/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.alquiler')
        .factory('AlquilerService', AlquilerService);

    function AlquilerService($http, $q){
        var url = "http://localhost/ConstruEquiposBACK/public";
        var equiposServiceFactory = {};

        var createAlquiler = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/RegistrarAlquiler',
                data: getData
            });
        };

        var createAlquilerInstitucion = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/alquilerInstitucion/create',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        var getAlquileresUsuario = function ($id) {
            return $http({
                method: 'GET',
                url: url + '/api/GetAllAlquileres/'+$id
            });
        };

      var getAlquileres = function () {
        return $http({
          method: 'GET',
          url: url + '/api/GetAllAlquileres'
        });
      };

        var getAlquileresInstitucion = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/alquilerInstitucion/AlquileresFecha',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        var getAlquileresDocente = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/alquilerInstitucion/AlquileresDocente',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        var getAlquileresHoy = function () {
            return $http({
                method: 'GET',
                url: url + '/api/alquiler/Hoy',
                headers: {'authorization': 'bearer ' + user._getToken()}

            });
        };

        var getAlquileresInsitucionHoy= function () {
            return $http({
                method: 'GET',
                url: url + '/api/alquilerInstitucion/Hoy',
                headers: {'authorization': 'bearer ' + user._getToken()}
            });
        };

        equiposServiceFactory.createAlquiler = createAlquiler;
        equiposServiceFactory.createAlquilerInstitucion = createAlquilerInstitucion;
        equiposServiceFactory.getAlquileres = getAlquileres;
        equiposServiceFactory.getAlquileresUsuario = getAlquileresUsuario;
        equiposServiceFactory.getAlquileresInstitucion = getAlquileresInstitucion;
        equiposServiceFactory.getAlquileresDocente = getAlquileresDocente;
        equiposServiceFactory.getAlquileresHoy = getAlquileresHoy;
        equiposServiceFactory.getAlquileresInsitucionHoy = getAlquileresInsitucionHoy;


        return equiposServiceFactory;

    }

})();
