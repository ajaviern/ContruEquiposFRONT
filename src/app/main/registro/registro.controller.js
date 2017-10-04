

(function ()
{
    'use strict';

    angular
        .module('app.registro')
        .controller('RegistroController', RegistroController);

    /** @ngInject */
    function RegistroController($state,DialogFactory, RegistroService)
    {
        var vm = this;
        vm.credenciales = {}; //este es el Objeto

        vm.roles  = []; // Este es el array de los roles


        /**
         * Roles
         */
        var R1 = "Admin";

        var R2 = "Vendedor";



         // Agregamos los roles
        vm.roles.push(R1);
        vm.roles.push(R2);

        vm.getSelectedText = function() {
            return vm.credenciales.rol;
        };

        vm.createUser = function () {
            var p = RegistroService.createUser(vm.credenciales);
            p.then(
                function (datos) {

                    DialogFactory.ShowSimpleToast("Usuario Registrado Exitosamente");
                    $state.go('app.index', {});
                //    $state.go('app.registro', {});
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        };
    }
})();
