(function () {
    'use strict';

    angular.module('app.reporteMisAlquileres')
        .controller('ReporteMisAlquileresController', ReporteMisAlquileresController);

    /** @ngInject */
    function ReporteMisAlquileresController(EquiposService, DialogFactory) {
        var vm = this;
        vm.VentasCategoria=[];



        vm.VentasporCategoria   = function () {

            var p = EquiposService.getVentasPorCategoria();
            p.then(
                function (datos) {

                    var respuesta =datos.data;

                    if(respuesta.error){
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    }else{
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                        vm.VentasCategoria=respuesta.data;

                        vm.doughnutChart = {
                            labels:vm.VentasCategoria.labels ,
                            data  : vm.VentasCategoria.data
                        };


                    }
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        };

        vm.lineChart = {
            labels: ['', '', '', '', '', '', ''],
            series: ['Series A', 'Series B', 'Series C'],
            data  : [
                [65, 59, 80, 81, 56, 55, 40],
                [45, 59, 50, 19, 100, 56, 30],
                [28, 48, 40, 19, 86, 27, 90]
            ]
        };

        vm.barChart = {
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            series: ['Series A', 'Series B'],
            data  : [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ]
        };

        vm.VentasporCategoria();
    }
})();
