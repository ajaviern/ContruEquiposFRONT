/**
 * Created by EspañaNet on 26/11/2016.
 */


(function ()
{
    'use strict';

    angular
        .module('app.index', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider, msApiProvider)
    {
        // State
        $stateProvider.state('app.index', {
            url      : '/index',
            views    : {

                'content@app': {
                    templateUrl: 'app/main/index/index.html',
                    controller : 'indexController as vm'
                }
            },
            resolve: {
                Cards: function (msApi)
                {
                    return msApi.resolve('cards@get');
                }
            },
            data: {
                permissions: {
                    only: ['SuperAdmin','Admin','Invitado','Vendedor']

                }
            },
            bodyClass: 'index'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/index');

        // Navigation
        msNavigationServiceProvider.saveItem('index', {
            title : 'Principal',
            icon  : 'icon-apps',
            state : 'app.index',
            weight: 1
        });

        // Api
        msApiProvider.register('cards', ['app/data/cards/cards.json']);

    }

})();

