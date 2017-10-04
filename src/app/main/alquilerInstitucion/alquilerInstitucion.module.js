/**
 * Created by EspañaNet on 21/11/2016.
 */

(function ()
{
    'use strict';

    angular
        .module('app.alquilerInstitucion',
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
        $stateProvider.state('app.alquilerInstitucion', {
            url      : '/alquilerInstitucion',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/alquilerInstitucion/alquilerInstitucion.html',
                    controller : 'alquilerInstitucionController as vm'
                }


            },
            data: {
                permissions: {
                    only: ['Institucion']

                }
            },
            bodyClass: 'alquilerInstitucion'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/alquilerInstitucion');

        // Navigation
        msNavigationServiceProvider.saveItem('alquilerInstitucion', {
            title : 'Alquiler Institucion',
            icon  : 'icon-calendar-today',
            state : 'app.alquilerInstitucion',
            weight: 2
        });
    }
})();