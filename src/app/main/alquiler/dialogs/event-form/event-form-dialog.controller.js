(function ()
{
    'use strict';

    angular.module('app.alquiler')
        .controller('EventFormDialogController', EventFormDialogController);

    /** @ngInject */
    function EventFormDialogController($mdDialog, dialogData,AlquilerService,DialogFactory,CategoriaEquiposService, EquiposService)
    {
        var vm = this;
        vm.alquiler = {};
       vm.usuario = {};
       vm.usuario.id = user._getIdUsuario();
       vm.usuario.nombre = user._getNombreCompleto();
       vm.usuario.telefono = user._getTelefono();
       vm.equipos = [];

        vm.equiposSelecciones = [];


             // Data
        vm.dialogData = dialogData;
        vm.dialogData.start = vm.dialogData.end;
        vm.notifications = ['15 minutes before', '30 minutes before', '1 hour before'];

        // Methods
        vm.saveEvent = saveEvent;
        vm.removeEvent = removeEvent;
        vm.closeDialog = closeDialog;

        vm.nuevoEquipo =nuevoEquipo;
        vm.createPedido =createPedido;

       // console.log(closeDialog);

        /** CHIP **/
        vm.readonly = false;
        vm.selectedItem = null;
        vm.searchText = null;
        vm.querySearch = querySearch;
        vm.vegetables = loadVegetables();
        vm.selectedVegetables = [];
        vm.numberChips = [];
        vm.numberChips2 = [];
        vm.numberBuffer = '';
        vm.autocompleteDemoRequireMatch = true;
        vm.transformChip = transformChip;



      function createPedido() {
        var datos = {};
        datos.detalle =vm.equiposSelecciones;

        for( var i in datos.detalle){

          var dates = {
            start: moment.utc(datos.detalle[i].fecha)
          };
          dates.start.subtract(1, 'day');
          datos.detalle[i].fecha = dates.start.format("YYYY/MM/DD");

        }

        datos.usuarios_id =vm.usuario.id;
        var p = AlquilerService.createAlquiler(datos);
        p.then(
          function (datos) {
            var respuesta =datos.data;

            if(respuesta.error){
              user.swalError("Error en la reserva");
            }else{
              user.swalSuccess("Datos guardados correctamente");
              closeDialog();
            }
          },
          function (error) {
            console.log(error);
          }
        )

      }


      function cargarTodosLosEquipos() {
        //alert('entro');
        var p = EquiposService.getAllEquipos();
        p.then(
          function (datos) {
            var respuesta =datos.data;

            if(respuesta.error){
              DialogFactory.ShowSimpleToast(respuesta.mensaje);
            }else{
              vm.equipos=respuesta.data;
            }
          },
          function (error) {
            DialogFactory.ShowSimpleToast(error.error_description);
          }
        )

      }
        function nuevoEquipo() {
          var equipo = {};
          vm.equiposSelecciones.push(angular.copy(equipo));
        }
        /**
         * Return the proper object when the append is called.
         */
        function transformChip(chip) {
            // If it is an object, it's already a known chip



           if (angular.isObject(chip)) {
                return chip;
              // return { name: chip, type: 'new' }
            }

            // Otherwise, create a new one
            return { name: chip, type: 'new' }
        }

        /**
         * Search for vegetables.
         */
        function querySearch (query) {
            var results = query ? vm.vegetables.filter(createFilterFor(query)) : [];
            return results;
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(vegetable) {
                return (vegetable._lowername.indexOf(lowercaseQuery) === 0) ||
                    (vegetable._lowertype.indexOf(lowercaseQuery) === 0);
            };

        }

        function loadVegetables() {
            var veggies = [
                {
                    'name': 'Proyector',
                    'type': '1',
                    'texto':'cantidad 1'
                },
                {
                    'name': 'Proyector',
                    'type': '2',
                    'texto':'cantidad 2'

                },
                {
                    'name': 'Proyector',
                    'type': '3',
                    'texto':'cantidad 3'
                },
                {
                    'name': 'Proyector',
                    'type': '4',
                    'texto':'cantidad 4'
                },
                {
                    'name': 'Luces',
                    'type': '1',
                    'texto':'cantidad 1'
                },
                {
                    'name': 'Luces',
                    'type': '2',
                    'texto':'cantidad 2'
                },
                {
                    'name': 'Luces',
                    'type': '3',
                    'texto':'cantidad 3'
                },
                {
                    'name': 'Luces',
                    'type': '4',
                    'texto':'cantidad 4'
                },
                {
                    'name': 'Sonido',
                    'type': '1',
                    'texto':'cantidad 1'
                },
                {
                    'name': 'Sonido',
                    'type': '2',
                    'texto':'cantidad 2'
                },
                {
                    'name': 'Sonido',
                    'type': '3',
                    'texto':'cantidad 3'
                },
                {
                    'name': 'Sonido',
                    'type': '4',
                    'texto':'cantidad 4'
                }

            ];

            return veggies.map(function (veg) {
                veg._lowername = veg.name.toLowerCase();
                veg._lowertype = veg.type.toLowerCase();
                return veg;
            });
        }

        init();

        //////////

        /**
         * Initialize
         */
        function init()
        {
          cargarTodosLosEquipos();
          nuevoEquipo();
            // Figure out the title
            switch ( vm.dialogData.type )
            {
                case 'add' :
                    vm.dialogTitle = 'Solicitar Servicio';
                    break;

                case 'edit' :
                    vm.dialogTitle = 'Add Event';
                    break;

                default:
                    break;
            }

            // Edit
            if ( vm.dialogData.calendarEvent )
            {
                // Clone the calendarEvent object before doing anything
                // to make sure we are not going to brake FullCalendar
                vm.calendarEvent = angular.copy(vm.dialogData.calendarEvent);

                // Convert moment.js dates to javascript date object
                if ( moment.isMoment(vm.calendarEvent.start) )
                {
                    vm.calendarEvent.start = vm.calendarEvent.start.toDate();
                }

                if ( moment.isMoment(vm.calendarEvent.end) )
                {
                    vm.calendarEvent.end = vm.calendarEvent.end.toDate();
                    vm.calendarEvent.end.set
                }
            }
            // Add
            else
            {
                // Convert moment.js dates to javascript date object
                if ( moment.isMoment(vm.dialogData.start) )
                {
                    vm.dialogData.start = vm.dialogData.start.toDate();
                }

                if ( moment.isMoment(vm.dialogData.end) )
                {
                    vm.dialogData.end = vm.dialogData.end.toDate();
                }

                vm.calendarEvent = {
                    start        : vm.dialogData.start,
                    end          : vm.dialogData.end,
                    notifications: []
                };
            }
        }

        /**
         * Save the event
         */
        function saveEvent()
        {

            vm.alquiler.equipos="";
            vm.selectedVegetables.forEach(function(datos){
                for(var i=0;i<+datos.type;i++){
                    vm.alquiler.equipos += datos.name+",";
                }
            })

            // Convert the javascript date objects back to the moment.js dates
            var dates = {
                start: moment.utc(vm.calendarEvent.start),
                end  : moment.utc(vm.calendarEvent.end)
            };

            vm.alquiler.fechaInicial = dates.start;
            vm.alquiler.fechaFinal = dates.end;
            var p = AlquilerService.createAlquiler(vm.alquiler);
            p.then(
                function (datos) {
                    var respuesta = datos.data;


                    if(respuesta.error.length>0){
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    }else{
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                        closeDialog();
                    }

                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
            /**
            var response = {
                type         : vm.dialogData.type,
                calendarEvent: angular.extend({}, vm.calendarEvent, dates)
            };

            $mdDialog.hide(response);

             */
        }

        /**
         * Remove the event
         */
        function removeEvent()
        {
            var response = {
                type         : 'remove',
                calendarEvent: vm.calendarEvent
            };

            $mdDialog.hide(response);
        }

        /**
         * Close the dialog
         */
        function closeDialog()
        {
            $mdDialog.cancel();
        }

        vm.CargarTodasLasCategorias = function () {

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

        vm.CargarTodosLosEquipos = function () {
            var p = EquiposService.getAllEquipos();
            p.then(
                function (datos) {
                    var respuesta =datos.data;

                    if(respuesta.error){
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                        vm.equipos=respuesta.data;
                    }else{
                        vm.equipos=respuesta.data;
                    }
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);
                }
            )
        }

        vm.CargarTodosLosEquipos();
        vm.CargarTodasLasCategorias();
    }
})();
