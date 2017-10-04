/**
 * Created by Javier Nuñez on 17/08/2017.
 */
(function ()
{
    'use strict';

    angular
        .module('app.producto', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.producto', {
            url      : '/producto',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/producto/producto.html',
                    controller : 'ProductoController as vm'
                }
            },
            data: {
                permissions: {
                    only: ['SuperAdmin','Admin']
                }
            },
            bodyClass: 'producto'
        })//mire para que lo haga a todos los modulos ok

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/producto');


        // Navigation
        msNavigationServiceProvider.saveItem('producto', {
            title : 'Registrar Productos',
            icon : 'icon-shape-plus',
            state : 'app.producto',
            weight: 4
        });

    }

})();

