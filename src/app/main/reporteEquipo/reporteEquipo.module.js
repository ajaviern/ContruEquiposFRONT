/**
 * Created by EspañaNet on 04/12/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteEquipo', ['xeditable'])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.reporteEquipo', {
                url    : '/reporteEquipo',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reporteEquipo/reporteEquipo.html',
                        controller : 'ReporteEquipoController as vm'
                    }
                },
                data: {
                    permissions: {
                        only: ['SuperAdmin']
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reporteEquipo');

        // Navigation
        msNavigationServiceProvider.saveItem('reporteEquipo', {
            title    : 'Consulta de Equipos',
            icon     : 'icon-file-find',
            state    : 'app.reporteEquipo',
            weight   : 1
        });
    }
})();
