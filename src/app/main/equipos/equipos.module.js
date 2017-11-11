
(function ()
{
    'use strict';

    angular
        .module('app.equipos', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.equipos', {
            url      : '/equipos',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/equipos/equipos.html',
                    controller : 'equiposController as vm'
                }
            },
            data: {
                permissions: {
                  only: ['administrador','empleado']
                }
            },
            bodyClass: 'equipos'
        })//mire para que lo haga a todos los modulos ok

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/equipos');

        // Navigation
        msNavigationServiceProvider.saveItem('equipos', {
            title : 'Registro equipos',
            icon  : 'icon-laptop',
            state : 'app.equipos',
            weight: 3
        });

    }

})();
