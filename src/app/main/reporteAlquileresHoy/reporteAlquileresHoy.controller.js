/**
 * Created by Erley on 05/12/2016.
 */
/**
 * Created by Erley on 30/11/2016.
 */
/**
 * Created by EspañaNet on 29/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteAlquileresHoy')
        .controller('ReporteAlquileresHoyController', ReporteAlquileresHoyController);

    /** @ngInject */
    function ReporteAlquileresHoyController($scope, DialogFactory, $timeout, $state, $mdDialog,AlquilerService ) {
        var vm = this;
        vm.credenciales = {};


        vm.seleccionar = function (data) {
            vm.select = data;
        };

        vm.Alquileres =[];
        vm.AlquileresInstitucion = [];
        vm.Reporte = {};

        function getAlquileres(){
            var promiseGet = AlquilerService.getAlquileresHoy();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(respuesta.error.length == 0){
                        vm.Alquileres = respuesta.data;
                    //console.log(vm.Alquileres);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }

        function getAlquileresInstitucion(){
            var promiseGet = AlquilerService.getAlquileresInsitucionHoy();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(respuesta.error.length == 0){
                        vm.AlquileresInstitucion = respuesta.data;
                     //   console.log(vm.Alquileres);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }


        __init();

        function __init() {
            getAlquileres();

            getAlquileresInstitucion();
        }




    }
})();
