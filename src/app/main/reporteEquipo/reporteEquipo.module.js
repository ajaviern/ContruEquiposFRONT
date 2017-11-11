/**
 * Created by EspañaNet on 04/12/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteEquipo', ['xeditable','datatables'])
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
                        only: ['administrador']
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reporteEquipo');

        // Navigation
        msNavigationServiceProvider.saveItem('reporteEquipo', {
            title    : 'Gestion de Equipos',
            icon     : 'icon-camera-iris',
            state    : 'app.reporteEquipo',
            weight   : 1
        });
    }
})();
