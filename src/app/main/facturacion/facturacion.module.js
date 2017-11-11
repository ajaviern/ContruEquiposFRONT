(function ()
{
    'use strict';

    angular
        .module('app.facturacion', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
      // State
      $stateProvider
        .state('app.facturacion', {
          url    : '/facturacion',
          views  : {
            'content@app': {
              templateUrl: 'app/main/facturacion/facturacion.html',
              controller : 'FacturacionController as vm'
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
