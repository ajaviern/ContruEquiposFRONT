/**
 * Created by EspañaNet on 27/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteDocentes')
        .controller('ReporteDocentesController', ReporteDocentesController);

    /** @ngInject */
    function ReporteDocentesController($scope, DialogFactory, $timeout, $state, DocentesService, AlquilerService ) {
        var vm = this;
        vm.credenciales = {};

        vm.Docentes =[];
        vm.Reporte = {};

        vm.Alquileres =[];

        __init();

        function __init() {
            getDocente();
        }

        function getDocente(){
            var promiseGet = DocentesService.getDocente();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(respuesta.error.length == 0){
                        vm.Docentes = respuesta.data;
                        console.log(vm.Docentes);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }


        vm.getAlquileres = function getAlquileres(){
            vm.credenciales.Docente = vm.Reporte.docenteId;
            var promiseGet = AlquilerService.getAlquileresDocente(vm.credenciales);
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



        /*AUTO_COMPLETE*/
        $scope.selectedItem  = null;
        $scope.searchText    = null;
        $scope.querySearch   = querySearch;
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
            var results = query ? $scope.states.filter( createFilterFor(query) ) : $scope.states;
            var deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            return deferred.promise;
        }
        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStates = $scope.motos;
            return allStates.map( function (state) {
                return {
                    value: state.nombreMoto.toLowerCase(),
                    display: state.nombreMoto,
                    modelo: state.modelo,
                    moto: state.nombreMoto + " (" + state.modelo + ")",
                    idMoto: state.idMoto
                };
            });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }
    }
})();
