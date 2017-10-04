(function ()
{
    'use strict';

    angular
        .module('app.reporteEquipo')
        .controller('ReporteEquipoController', ReporteEquipoController);

    /** @ngInject */
    function ReporteEquipoController($state,EquiposService,$scope)
    {
        var vm = this;

        // Data
        vm.products = {};



        vm.dtInstance = {};
        vm.dtOptions = {
            dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple',
            autoWidth : false,
            responsive: true,
            language: {
                "sSearch": "Buscar",
                "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ registros",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                }
            }
        };
        // Methods
        vm.gotoProductDetail = gotoProductDetail;

        //////////

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoProductDetail(id)
        {
            $state.go('app.e-commerce.products.detail', {id: id});
        }

        function cargarTodosLosEquipos() {
            var p = EquiposService.getAllEquipos();
            p.then(
                function (datos) {
                    var respuesta =datos.data;

                    if(respuesta.error){
                        //DialogFactory.ShowSimpleToast(respuesta.mensaje);
                        vm.products=respuesta.data;
                    }else{
                        vm.products=respuesta.data;
                    }
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);
                }
            )

        }

        cargarTodosLosEquipos();
    }


})();