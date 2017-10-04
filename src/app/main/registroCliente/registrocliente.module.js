/**
 * Created by EspañaNet on 15/11/2016.
 */


(function ()
{
    'use strict';

    angular
        .module('app.registroCliente', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.registroCliente', {
            url      : '/registroCliente',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.registroCliente': {
                    templateUrl: 'app/main/registroCliente/registrocliente.html',
                    controller : 'RegistroClienteController as vm'
                }
            },
            data: {
                permissions: {
                    only: ['SuperAdmin','Admin']
                }
            },
            bodyClass: 'registroCliente'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/registroCliente');


             // Navigation
             msNavigationServiceProvider.saveItem('registroCliente', {
                 title : 'Registrar Clientes',
                 icon : 'icon-person-plus',
                 state : 'app.registroCliente',
                 weight: 4
             });

    }

})();

