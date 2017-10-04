/**
 * Created by EspañaNet on 05/12/2016.
 */
(function ()
{
    'use strict';

    angular.module('app.reporteEquipo')

        .controller('EquipoDialogController', EquipoDialogController);

    /** @ngInject */
    function EquipoDialogController($mdDialog, equipo, Equipos, $scope, EquiposService, DialogFactory)
    {
        __init();

        function __init() {
            $scope.titulo = 'Actualizar Empleado';
            $scope.equipo = angular.copy(equipo);
            $scope.equipo.fechaCompra = new Date($scope.equipo.fechaCompra);
            $scope.Equipos = Equipos;
            $scope.nuevoEquipo = false;

            if (!$scope.equipo)
            {
                $scope.titulo = 'Nuevo Equipo';
                $scope.nuevoEquipo = true;
            }

            $scope.CrearEquipo = CrearEquipo;
            $scope.ActualizarEquipo = ActualizarEquipo;
            $scope.closeDialog = closeDialog;
        };

        function closeDialog() {
            $mdDialog.hide();
        };

        function CrearEquipo() {
            /*var promisePost = ApiEmpleados.CrearEmpleado($scope.empleado);
            promisePost.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        respuesta.datos.activo = true;
                        $scope.empleados.push(respuesta.datos);
                        closeDialog();
                    }
                    DialogFactory.ShowSimpleToast(respuesta.mensaje);
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            );*/
        };

        function ActualizarEquipo() {
            var promisePost = EquiposService.EditEquipos($scope.equipo);
            promisePost.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        respuesta.datos.activo = true;
                        UpdateEquipos(respuesta.datos);
                        closeDialog();
                    }
                    DialogFactory.ShowSimpleToast(respuesta.mensaje);
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            );
        };

        function UpdateEquipos(equipo) {
            for(var i in vm.Equipos){
                if(vm.Equipos[i].equipoId == equipo.equipoId){
                    vm.Equipos[i] = equipo;
                    break;
                }
            }
        }
    }
})();