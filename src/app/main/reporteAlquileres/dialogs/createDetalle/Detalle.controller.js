(function ()
{
    'use strict';

    angular.module('app.reporteAlquileres')
        .controller('DetalleController', DetalleController);

    /** @ngInject */
    function DetalleController($mdDialog, CategoriaEquiposService,parentController,alquiler,detallesIngresoService)
    {
        var vm = this;


        // Data
       // vm.equipo = equipo;

      vm.detalles = alquiler.detalle;
        // Methods
        vm.editEvent = editEvent;
        vm.closeDialog = closeDialog;
        vm.CargarTodasLasCategorias =CargarTodasLasCategorias;
        vm.IngresoEquipos=IngresoEquipos;

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

        function IngresoEquipos(data) {
            var datos = {};
            datos.id_detalles_salidas = data.id;
            datos.cantidad_ingreso = data.cantidad;
            var promiseGet = detallesIngresoService.IngresoEquipos(datos);
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){ // si error es diferente de TRUE
                        //vm.Alquileres = respuesta.datos;
                        user.swalSuccess("Equipos Entregados A ConstruEquipos");
                        parentController.getAlquileres();
                        closeDialog();
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )

        }
    }
})();
