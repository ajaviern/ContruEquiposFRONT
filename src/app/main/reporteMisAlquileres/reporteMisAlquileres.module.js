/**
 * Created by Erley on 30/11/2016.
 */
/**
 * Created by EspañaNet on 29/11/2016.
 */


(function () {
    'use strict';

    angular.module('app.reporteMisAlquileres', [
        // 3rd Party Dependencies
        'chart.js'

    ])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.reporteMisAlquileres', {
                url    : '/reporteMisAlquileres',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reporteMisAlquileres/reporteMisAlquileres.html',
                        controller : 'ReporteMisAlquileresController as vm'
                    }
                },
                data: {
                    permissions: {
                        only: ['administrador','empleado']
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reporteMisAlquileres');

        // Navigation
        msNavigationServiceProvider.saveItem('Reportes', {
            title    : 'Reportes',
            icon     : 'icon-pin',
            weight   : 2
        });

        // Navigation
        msNavigationServiceProvider.saveItem('Reportes.reporteMisAlquileres', {
            title    : 'Analisis de Ventas',
            icon     : 'icon-pin',
            state    : 'app.reporteMisAlquileres',
            weight   : 2
        });
    }
})();
