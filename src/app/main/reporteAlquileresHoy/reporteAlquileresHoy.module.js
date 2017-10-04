/**
 * Created by Erley on 05/12/2016.
 */
/**
 * Created by Erley on 30/11/2016.
 */
/**
 * Created by EspañaNet on 29/11/2016.
 */


(function () {
    'use strict';

    angular.module('app.reporteAlquileresHoy', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.reporteAlquileresHoy', {
                url    : '/reporteAlquileresHoy',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reporteAlquileresHoy/reporteAlquileresHoy.html',
                        controller : 'ReporteAlquileresHoyController as vm'
                    }
                },
                data: {
                    permissions: {
                        only: ['SuperAdmin']
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reporteAlquileres');

        // Navigation
        msNavigationServiceProvider.saveItem('reporteAlquileresHoy', {
            title    : 'Alquileres Para hoy',
            icon     : 'icon-file-find',
            state    : 'app.reporteAlquileresHoy',
            weight   : 1
        });
    }
})();
