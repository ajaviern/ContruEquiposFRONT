(function ()
{
    'use strict';

    angular
        .module('app.alquiler',
            [
                // 3rd Party Dependencies
                'ui.calendar'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.alquiler', {
            url      : '/alquiler',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/alquiler/alquiler.html',
                    controller : 'alquilerController as vm'
                }
            },
            data: {
                permissions: {
                    only: ['inivtado','administrador','usuario','empleado']

                }
            },
            bodyClass: 'alquiler'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/alquiler');

        // Navigation
        msNavigationServiceProvider.saveItem('alquiler', {
            title : 'Alquiler',
            icon  : 'icon-calendar-today',
            state : 'app.alquiler',
            weight: 1
        });
    }
})();
