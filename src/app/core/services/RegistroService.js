/**
 * Created by Erley on 23/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.registro')
        .factory('RegistroService', RegistroService);

    function RegistroService($http, $q){
        var url = "http://localhost/ConstruEquiposBACK/public/";
        var registerServiceFactory = {};

        var createUser = function (getData) {
            return $http({
                method: 'POST',
                url: url + 'api/user',
                data: getData
            });
        };

        var getAllUsuarios= function () {
            return $http({
                method: 'GET',
                url: url + 'api/user'
            });
        };

        var EditUsuarios=function (data,cod) {

            return $http({
                method: 'PUT',
                url: url + 'api/user/' + cod,
                data: data
            });

        }
        

        registerServiceFactory.createUser = createUser;
        registerServiceFactory.getAllUsuarios = getAllUsuarios;
        registerServiceFactory.EditUsuarios = EditUsuarios;
        return registerServiceFactory;


    }
})();
