/**
 * Created by EspañaNet on 21/11/2016.
 **/

(function ()
{
    'use strict';

    angular
        .module('app.registroDocentes')
        .controller('RegistroDocentesController', RegistroDocentesController);

    /** @ngInject **/
    function RegistroDocentesController(DocentesService,DialogFactory,$state)
    {
        var vm = this;
        vm.credenciales = {};

        vm.credenciales.Institucion = user._getUsername();

        vm.createDocente = function () {
            var p = DocentesService.createDocente(vm.credenciales);
            p.then(
                function (datos) {
                    var respuesta = datos.data;

                    if(respuesta.error.length>0){
                     //   DialogFactory.ShowSimpleToast("Conectado...");
                      //  DialogFactory.ShowSimpleToast(respuesta.mensage);
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);

                    }else {
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                        vm.credenciales = {};
                        //$state.go('app.alquiler', {});
                     //  $state.go('app.registroDocentes', {});
                        $state.reload();
                    }



                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        };

    }
})();


