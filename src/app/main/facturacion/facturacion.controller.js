(function ()
{
    'use strict';

    angular
        .module('app.facturacion')
        .controller('FacturacionController', FacturacionController);

    /** @ngInject */
    function FacturacionController(FacturacionService,$state)
    {
        var vm = this;
        vm.pedido= FacturacionService.getPedido();

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
    }
})();
