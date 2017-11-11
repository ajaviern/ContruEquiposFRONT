(function ()
{
    'use strict';

    angular.module('app.reporteAlquileres')
        .controller('DetalleController', DetalleController);

    /** @ngInject */
    function DetalleController($mdDialog, CategoriaEquiposService,parentController,alquiler)
    {
        var vm = this;


        // Data
       // vm.equipo = equipo;

      vm.detalles = alquiler.detalle;
        // Methods
        vm.editEvent = editEvent;
        vm.closeDialog = closeDialog;
        vm.CargarTodasLasCategorias =CargarTodasLasCategorias;

        __init();

        function __init() {
          CargarTodasLasCategorias();
        }

       function CargarTodasLasCategorias () {

        var p = CategoriaEquiposService.getAllCategoriaEquipos();
        p.then(
          function (datos) {
            vm.categorias = datos.data.data
          },
          function (error) {
            DialogFactory.ShowSimpleToast(error.error_description);
          }
        )
      }

        //////////

        /**
         * Close the dialog
         */
        function closeDialog()
        {
         // parentController.cargarTodosLosEquipos();
            $mdDialog.hide();
        }

        /**
         * Edit the calendar event
         *
         * @param calendarEvent
         */
        function editEvent(calendarEvent)
        {
            showEventFormDialog('edit', calendarEvent, false, false, event);
        }
    }
})();
