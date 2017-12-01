(function ()
{
    'use strict';

    angular
        .module('app.detallesIngreso')
        .controller('detallesIngresoController', detallesIngresoController);

    /** @ngInject */
    function detallesIngresoController(detallesIngresoService,$state,AlquilerService,DialogFactory)
    {
        var vm = this;
        vm.pedido= detallesIngresoService.getPedido();

        vm.facturar =facturar;

        __init();

        function __init() {
            if(vm.pedido==null){
              $state.go('app.detallesIngreso', {});
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
              $state.go('app.detallesIngreso', {});
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
