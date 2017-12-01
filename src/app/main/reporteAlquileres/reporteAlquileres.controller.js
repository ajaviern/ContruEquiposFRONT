/**
 * Created by Erley on 30/11/2016.
 */
/**
 * Created by EspañaNet on 29/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteAlquileres')
        .controller('ReporteAlquileresController', ReporteAlquileresController);

    /** @ngInject */
    function ReporteAlquileresController($scope, DialogFactory, $timeout, $state, $mdDialog,AlquilerService,$document,FacturacionService ) {
        var vm = this;
        vm.usuarios_id =user._getIdUsuario();
        vm.credenciales = {};


        vm.seleccionar = function (data) {
            vm.select = data;
        };

        vm.getAlquileres=getAlquileres;
        vm.modalCreateCategoria =modalCreateDetalle;
        vm.goFacturacion=goFacturacion;


        vm.Alquileres =[];
        vm.Reporte = {};



        __init();

        function __init() {
          getAlquileres();
        }

        function goFacturacion(data) {
          FacturacionService.setPedido(data);
          $state.go('app.facturacion', {});
        }




        function getAlquileres(){
        //  console.log(vm.usuarios_id)
            var promiseGet = AlquilerService.getAlquileres();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        vm.Alquileres = respuesta.datos;
                      //  console.log(vm.Alquileres);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }



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

      function modalCreateDetalle(alquiler)
      {
        $mdDialog.show({
          controller         : 'DetalleController',
          controllerAs       : 'vm',
          templateUrl        : 'app/main/reporteAlquileres/dialogs/createDetalle/Detalle.html',
          parent             : angular.element($document.body),
          clickOutsideToClose: true,
          locals             : {
            alquiler:alquiler,
            parentController :vm
          }
        });
      }


    }
})();
