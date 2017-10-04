/**
 * Created by Javier Nuñez on 5/08/2017.
 */

(function () {
    'use strict';

    angular.module('app.reporteUsuarios', ['xeditable'])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.reporteUsuarios', {
                url    : '/reporteUsuarios',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reporteUsuarios/reporteUsuarios.html',
                        controller : 'ReporteUsuariosController as vm'
                    }
                },
                data: {
                    permissions: {
                        only: ['SuperAdmin','Admin']
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reporteUsuarios');

        // Navigation
        msNavigationServiceProvider.saveItem('reporteUsuarios', {
            title    : 'Consulta de Usuarios',
            icon     : 'icon-file-find',
            state    : 'app.reporteUsuarios',
            weight   : 1
        });
    }
})();

