/**
 * Created by Erley on 30/11/2016.
 */
/**
 * Created by Erley on 30/11/2016.
 */
/**
 * Created by EspañaNet on 29/11/2016.
 */


(function () {
    'use strict';

    angular.module('app.reporteAlquileresInstitucion', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.reporteAlquileresInstitucion', {
                url    : '/reporteAlquileresInstitucion',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reporteAlquileresInstitucion/reporteAlquileresInstitucion.html',
                        controller : 'ReporteAlquileresInstitucionController as vm'
                    }
                },
                data: {
                    permissions: {
                        only: ['SuperAdmin']
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reporteAlquileresInstitucion');

        // Navigation
        msNavigationServiceProvider.saveItem('reporteAlquileresInstitucion', {
            title    : 'Consulta alquileres Instituciones',
            icon     : 'icon-file-find',
            state    : 'app.reporteAlquileresInstitucion',
            weight   : 1
        });
    }
})();
