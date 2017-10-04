/**
 * Created by Erley on 30/11/2016.
 */
/**
 * Created by Erley on 30/11/2016.
 */
/**
 * Created by EspañaNet on 29/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteAlquileresInstitucion')
        .controller('ReporteAlquileresInstitucionController', ReporteAlquileresInstitucionController);

    /** @ngInject */
    function ReporteAlquileresInstitucionController($scope, DialogFactory, $timeout, $state, $mdDialog,AlquilerService ) {
        var vm = this;
        vm.credenciales = {};


        vm.seleccionar = function (data) {
            vm.select = data;
        };

        vm.Alquileres =[];
        vm.Reporte = {};



        __init();

        function __init() {
            // getAlquileres();
        }

        vm.getAlquileres = function getAlquileres(){
            var promiseGet = AlquilerService.getAlquileresInstitucion(vm.credenciales);
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(respuesta.error.length == 0){
                        vm.Alquileres = respuesta.data;
                        console.log(vm.Alquileres);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }


    }
})();
