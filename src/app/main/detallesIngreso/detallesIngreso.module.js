(function ()
{
    'use strict';

    angular
        .module('app.detallesIngreso', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
      // State
      $stateProvider
        .state('app.detallesIngreso', {
          url    : '/detallesIngreso',
          views  : {
            'content@app': {
              templateUrl: 'app/main/detallesIngreso/detallesIngreso.html',
              controller : 'detallesIngresoController as vm'
            }
          },
          data: {
            permissions: {
              only: ['administrador']
            }
          }
        });

      // Translation
     // $translatePartialLoaderProvider.addPart('app/main/facturacion');

    }

})();
