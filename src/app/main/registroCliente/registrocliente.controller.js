/**
 * Created by EspañaNet on 15/11/2016.
 */

(function ()
{
    'use strict';

    angular
        .module('app.registroCliente')
        .controller('RegistroClienteController', RegistroClienteController);

    /** @ngInject */
    function RegistroClienteController($state,DialogFactory, RegistroService)
    {
        var vm = this;
        vm.credenciales = {}; //este es el Objeto


        vm.createUser = function () {
            vm.credenciales.rol='Cliente';
            var p = RegistroService.createUser(vm.credenciales);
            p.then(
                function (datos) {

                    DialogFactory.ShowSimpleToast("Usuario Registrado Exitosamente");
                    $state.go('app.index', {});
                //    $state.go('app.registro', {});
                },
                function (error) {
                    console.log(error.data);
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        };
    }
})();
