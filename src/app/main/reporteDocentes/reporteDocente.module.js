/**
 * Created by EspañaNet on 27/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteDocentes', [
        // 3rd Party Dependencies
        'nvd3'
    ])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.reporteDocentes', {
                url    : '/reporteDocentes',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reporteDocentes/reporteDocentes.html',
                        controller : 'ReporteDocentesController as vm'
                    }
                },
                data: {
                    permissions: {
                        only: ['administrador','empleado']
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reporteDocentes');

        // Navigation
        msNavigationServiceProvider.saveItem('Reportes.reporteDocentes', {
            title    : 'Estadisticas de Equipos',
            icon     : 'icon-file-find',
            state    : 'app.reporteDocentes',
            weight   : 1
        });
    }
})();
