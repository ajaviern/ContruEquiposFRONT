/**
 * Created by Erley on 08/11/2016.
 */
(function ()
{
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(LoginService,$state,DialogFactory, AlquilerService)
    {

        if(LoginService.verificarSesion()){
           // event.preventDefault();
            $state.go('app.index', {});
        }

        var vm = this;
        vm.credenciales = {}; // this is a objetc

        vm.Login = function () {
            var p = LoginService.login(vm.credenciales);
            p.then(
                function (datos) {
                    if(datos.error){
                        alert(datos.mensaje);
                    }else{
                        var respuesta = datos.data;
                        user._setNombreCompleto(respuesta.name);
                        user._setIdUsuario(respuesta.id);
                        user._setNombreRol(respuesta.rol);
                        user._setEmail(respuesta.email);
                        alert(datos.mensaje);

                        $state.go('app.index', {});
                    }

                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        }; // te quiero mucho come monda la ultima vez que te ayudo en este malparido proyecto, abre mi proyecto de ferremotos




    }
})();