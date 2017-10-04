/**
 * Created by Javier Nuñez on 5/08/2017.
 */

(function () {
    'use strict';

    angular.module('app.reporteUsuarios')
        .controller('ReporteUsuariosController', ReporteUsuariosController);

    /** @ngInject */
    function ReporteUsuariosController($scope, DialogFactory, $timeout, $state, RegistroService, $mdDialog, $document) {
        var vm = this;

        vm.Usuarios =[];//Este es el array
        vm.Reporte = {};//este es el objetooo

        $scope.openEquipoDialog = openEquipoDialog;

        __init();

        function __init() {
            getAllUsuarios();
        }

        function getAllUsuarios(){
            var traeruser = RegistroService.getAllUsuarios();
            traeruser.then(
                function (data) {
                    var respuesta = data.data;

                        vm.Usuarios = respuesta;

                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }

        function openEquipoDialog(ev, usuario) {
            $mdDialog.show({
                controller         : 'UsuariosDialogController',
                templateUrl        : 'app/main/reporteUsuarios/EditarUsuarios/EditarUsuarios.html',
                parent             : angular.element($document.find('#content-container')),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    usuario : usuario
                }
            });
        }
    }
})();

