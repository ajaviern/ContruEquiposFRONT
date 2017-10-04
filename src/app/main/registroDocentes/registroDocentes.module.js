/**
 * Created by EspañaNet on 21/11/2016.
 */
(function ()
{
    'use strict';

    angular
        .module('app.registroDocentes', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.registroDocentes', {
            url      : '/registroDocentes',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/registroDocentes/registroDocentes.html',
                    controller : 'RegistroDocentesController as vm'
                }
            },
            data: {
                permissions: {
                    only: ['Institucion']

                }
            },
            bodyClass: 'registroDocentes'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/registroDocentes');

        // Navigation
        msNavigationServiceProvider.saveItem('registroDocentes', {
            title : 'Registro Docentes',
            icon  : 'icon-human-male-female',
            state : 'app.registroDocentes',
            weight: 5
        });

    }

})();
