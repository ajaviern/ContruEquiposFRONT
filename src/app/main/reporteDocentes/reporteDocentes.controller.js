/**
 * Created by EspañaNet on 27/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteDocentes')
        .controller('ReporteDocentesController', ReporteDocentesController);

    /** @ngInject */
    function ReporteDocentesController($scope, DialogFactory, $timeout, $state, DocentesService, AlquilerService,EquiposService ) {
        var vm = this;

        vm.HistoricoMasAlquilados=[];
        vm.HistoricoMasAlquiladosPorMes=[];
        vm.HistoricoAlquilerporPersonas=[];
        vm.pieChart={};
        vm.pieChart2={};



        // line chart
        vm.lineChart = {
            data   : {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                    [12, 9, 7, 8, 5],
                    [2, 1, 3.5, 7, 3],
                    [1, 3, 4, 5, 6]
                ]
            },
            options: {
                fullWidth   : true,
                chartPadding: {
                    right: 40
                }
            }
        };

        //  DonutChart
        vm.donutChart = {
            options: {
                chart: {
                    type      : 'pieChart',
                    height    : 450,
                    donut     : true,
                    x         : function (d)
                    {
                        return d.key;
                    },
                    y         : function (d)
                    {
                        return d.y;
                    },
                    showLabels: true,

                    pie               : {
                        startAngle: function (d)
                        {
                            return d.startAngle / 2 - Math.PI / 2;
                        },
                        endAngle  : function (d)
                        {
                            return d.endAngle / 2 - Math.PI / 2;
                        }
                    },
                    transitionDuration: 500,
                    legend            : {
                        margin: {
                            top   : 5,
                            right : 70,
                            bottom: 5,
                            left  : 0
                        }
                    }
                }
            },

            data: [
                {
                    key: 'One',
                    y  : 5
                },
                {
                    key: 'Two',
                    y  : 2
                },
                {
                    key: 'Three',
                    y  : 9
                },
                {
                    key: 'Four',
                    y  : 7
                },
                {
                    key: 'Five',
                    y  : 4
                },
                {
                    key: 'Six',
                    y  : 3
                },
                {
                    key: 'Seven',
                    y  : 0.5
                }
            ]

        };


        vm.HistoricoMasAlquilados = function () {

            var p = EquiposService.getEquipoMasAlquilado();
            p.then(
                function (datos) {

                    var respuesta =datos.data;

                    if(respuesta.error){
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    }else{
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                        vm.HistoricoEquiposMasAlquilados=respuesta.data;

                        vm.pieChart = {
                            options: {
                                chart: {
                                    type              : 'pieChart',
                                    height            : 500,
                                    x                 : function (d)
                                    {
                                        return d.key;
                                    },
                                    y                 : function (d)
                                    {
                                        return d.y;
                                    },
                                    showLabels        : true,
                                    transitionDuration: 500,
                                    labelThreshold    : 0.01,
                                    legend            : {
                                        margin: {
                                            top   : 5,
                                            right : 35,
                                            bottom: 5,
                                            left  : 0
                                        }
                                    }
                                }
                            },
                            data   :  vm.HistoricoEquiposMasAlquilados
                        };

                    }
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        };

        vm.HistoricoAlquilerporPersonas = function () {
            var p = EquiposService.getAlquilerporPersonas();
            p.then(
                function (datos) {

                    var respuesta =datos.data;

                    if(respuesta.error){
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    }else{
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                        vm.HistoricoAlquilerporPersonas=respuesta.data;

                        vm.pieChart2 = {
                            options: {
                                chart: {
                                    type              : 'pieChart',
                                    height            : 500,
                                    x                 : function (d)
                                    {
                                        return d.key;
                                    },
                                    y                 : function (d)
                                    {
                                        return d.y;
                                    },
                                    showLabels        : true,
                                    transitionDuration: 500,
                                    labelThreshold    : 0.01,
                                    legend            : {
                                        margin: {
                                            top   : 5,
                                            right : 35,
                                            bottom: 5,
                                            left  : 0
                                        }
                                    }
                                }
                            },
                            data   :  vm.HistoricoAlquilerporPersonas
                        };

                    }
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        }


        vm.HistoricoMasAlquilados();
        vm.HistoricoAlquilerporPersonas();

    }
})();
