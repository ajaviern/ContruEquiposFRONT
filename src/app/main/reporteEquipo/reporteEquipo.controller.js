(function ()
{
    'use strict';

    angular
        .module('app.reporteEquipo')
        .controller('ReporteEquipoController', ReporteEquipoController);

    /** @ngInject */
    function ReporteEquipoController($state,EquiposService,$scope,$mdDialog,$document)
    {
        var vm = this;

        // Data
        vm.products = {};



        vm.dtInstance = {};

        vm.showEventDetailDialog =showEventDetailDialog;
        vm.cargarTodosLosEquipos = cargarTodosLosEquipos;
        vm.modalCreateEquipo = modalCreateEquipo;
        vm.modalCreateCategoria =modalCreateCategoria;
        /**
      vm.dtOptions = {
        dom: '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
        pagingType: 'simple',
        autoWidth: false,
        responsive: true
      };

      vm.dtOptions = {
        dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
        pagingType: 'simple',
        autoWidth : false,
        responsive: true
      };
         **/


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
       * Show event detail dialog
       * @param equipo
       * @param e
       */
      function showEventDetailDialog(equipo)
      {
        $mdDialog.show({
          controller         : 'EditarEquipoController',
          controllerAs       : 'vm',
          templateUrl        : 'app/main/reporteEquipo/dialogs/event-detail/event-detail-dialog.html',
          parent             : angular.element($document.body),
          clickOutsideToClose: true,
          locals             : {
            equipo      : equipo,
            parentController :vm
          }
        });
      }

      /**
       * Show event detail dialog
       * @param equipo
       * @param e
       */
      function modalCreateEquipo()
      {
        $mdDialog.show({
          controller         : 'CreateEquipoController',
          controllerAs       : 'vm',
          templateUrl        : 'app/main/reporteEquipo/dialogs/createEquipos/createEquipos.html',
          parent             : angular.element($document.body),
          clickOutsideToClose: true,
          locals             : {
            parentController :vm
          }
        });
      }

      function modalCreateCategoria()
      {
        $mdDialog.show({
          controller         : 'CreateCategoriaController',
          controllerAs       : 'vm',
          templateUrl        : 'app/main/reporteEquipo/dialogs/createCategoria/createCategoria.html',
          parent             : angular.element($document.body),
          clickOutsideToClose: true,
          locals             : {
            parentController :vm
          }
        });
      }
        /**
         * Go to user detail
         *
         * @param id
         */
        function gotoProductDetail(id)
        {
            $state.go('app.e-commerce.products.detail', {id: id});
        }

        function cargarTodosLosEquipos() {
          //alert('entro');
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
