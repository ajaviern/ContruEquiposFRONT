/**
 * Created by EspañaNet on 05/12/2016.
 */
(function ()
{
    'use strict';

    angular.module('app.reporteUsuarios')

        .controller('UsuariosDialogController', UsuariosDialogController);

    /** @ngInject */
    function UsuariosDialogController($mdDialog, usuario, $scope, RegistroService, DialogFactory)
    {
        var vm = this;
        $scope.user = angular.copy(usuario);

        $scope.roles  = []; // Este es el array de los roles


        /**
         * Roles
         */
        var R1 = "Admin";

        var R2 = "Vendedor";

        // Agregamos los roles
        $scope.roles.push(R1);
        $scope.roles.push(R2);

        $scope.getSelectedText = function() {
            return $scope.user.rol;
        };

        __init();

        function __init() {
            $scope.titulo = 'Actualizar Usuario';

            $scope.ActualizarUsuarios = ActualizarUsuarios;
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

        function ActualizarUsuarios() {
            var promisePost = RegistroService.EditUsuarios($scope.user,$scope.user.id);
            promisePost.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        closeDialog();
                    }
                    DialogFactory.ShowSimpleToast(respuesta.mensaje);
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            );
        };
    }
})();