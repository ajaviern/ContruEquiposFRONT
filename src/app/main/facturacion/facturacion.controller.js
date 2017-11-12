(function ()
{
    'use strict';

    angular
        .module('app.facturacion')
        .controller('FacturacionController', FacturacionController);

    /** @ngInject */
    function FacturacionController(FacturacionService,$state,AlquilerService,DialogFactory)
    {
        var vm = this;
        vm.pedido= FacturacionService.getPedido();

        vm.facturar =facturar;

        __init();

        function __init() {
            if(vm.pedido==null){
              $state.go('app.reporteAlquileres', {});
            }
        }
        // Data
        //vm.invoice = Invoice.data;

        // Methods

        //////////

      function facturar (id) {
        var p = AlquilerService.facturar(id);
        p.then(
          function (datos) {
            var respuesta = datos.data;
            if(respuesta.error){
              user.swalSuccess(respuesta.mensaje);
            }else{
              user.swalSuccess("Alquiler Despachado");
              $state.go('app.reporteAlquileres', {});
            }
           // DialogFactory.ShowSimpleToast("Usuario Registrado Exitosamente");

            //    $state.go('app.registro', {});
          },
          function (error) {
            DialogFactory.ShowSimpleToast(error.error_description);

          }
        )
      };
    }
})();
