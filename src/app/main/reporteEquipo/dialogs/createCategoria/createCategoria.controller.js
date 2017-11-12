(function ()
{
    'use strict';

    angular.module('app.reporteEquipo')
        .controller('CreateCategoriaController', CreateCategoriaController);

    /** @ngInject */
    function CreateCategoriaController($mdDialog, CategoriaEquiposService,parentController)
    {
        var vm = this;


        // Data
       // vm.equipo = equipo;

      vm.categoria = {};
        // Methods
        vm.editEvent = editEvent;
        vm.closeDialog = closeDialog;
        vm.createCategoria =createCategoria;

        __init();

        function __init() {

        }

       function createCategoria (categoria) {

        var p = CategoriaEquiposService.createCategoriaEquipo(categoria);
        p.then(
          function (datos) {
            var respuesta = datos.data;
            if(respuesta.error){

              user.swalError(respuesta.mensaje);
            }else{

              user.swalSuccess("Categoria creada correctamente");
            }
            closeDialog();
          },
          function (error) {

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
