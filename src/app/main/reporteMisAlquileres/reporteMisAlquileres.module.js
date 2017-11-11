/**
 * Created by Erley on 30/11/2016.
 */
/**
 * Created by EspañaNet on 29/11/2016.
 */


(function () {
    'use strict';

    angular.module('app.reporteMisAlquileres', [])
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
                        only: ['usuario']
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reporteMisAlquileres');

        // Navigation
        msNavigationServiceProvider.saveItem('reporteMisAlquileres', {
            title    : 'Mis Alquileres',
            icon     : 'icon-pin',
            state    : 'app.reporteMisAlquileres',
            weight   : 1
        });
    }
})();
