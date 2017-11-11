(function ()
{
    'use strict';

    angular.module('app.alquiler')
        .controller('EditarEquipoController', EditarEquipoController);

    /** @ngInject */
    function EditarEquipoController($mdDialog, equipo,CategoriaEquiposService,parentController)
    {
        var vm = this;

        var bandera=false;

        // Data
        vm.equipo = equipo;
        vm.categorias = {};

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

      function editarEquipo () {
        bandera=true;
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
          if(bandera){
            parentController.cargarTodosLosEquipos();
          }

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
