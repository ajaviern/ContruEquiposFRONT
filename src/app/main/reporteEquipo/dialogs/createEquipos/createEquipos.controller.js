(function ()
{
    'use strict';

    angular.module('app.reporteEquipo')
        .controller('CreateEquipoController', CreateEquipoController);

    /** @ngInject */
    function CreateEquipoController($mdDialog, CategoriaEquiposService,parentController,EquiposService)
    {
        var vm = this;

        var bandera = false;


        // Data
       // vm.equipo = equipo;
        vm.categorias = {};

        // Methods
        vm.editEvent = editEvent;
        vm.closeDialog = closeDialog;
        vm.CargarTodasLasCategorias =CargarTodasLasCategorias;
        vm.createEquipo=createEquipo;

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

      function createEquipo (equipo) {
          bandera=true;
        var p = EquiposService.createEquipo(equipo);
        p.then(
          function (datos) {
            var respuesta = datos.data;
            if(respuesta.error){
              user.swalError(respuesta.mensaje);
            }else{
              user.swalSuccess("Equipo Agregado Correctamente");
            }

            closeDialog();
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
