/**
 * Created by Javier Nuñez on 5/08/2017.
 */

(function () {
  'use strict';

  angular.module('app.reporteUsuarios')
    .controller('ReporteUsuariosController', ReporteUsuariosController);

  /** @ngInject */
  function ReporteUsuariosController($scope, DialogFactory, $timeout, $state, RegistroService, $mdDialog, $document) {
    var vm = this;

    vm.usuarios = [];//Este es el array
    vm.Reporte = {};//este es el objetooo

    vm.state = state;

    $scope.openEquipoDialog = openEquipoDialog;

    __init();

    function __init() {
      getAllUsuarios();
    }

    function state() {
      $state.go('app.registro', {});
    }

    function getAllUsuarios() {
      var traeruser = RegistroService.getAllUsuarios();
      traeruser.then(
        function (data) {
          var respuesta = data.data;

          vm.usuarios = respuesta.data;

        },
        function (err) {
          console.log(JSON.stringify(err));
        }
      )
    }

    function openEquipoDialog(ev, usuario) {
      $mdDialog.show({
        controller: 'UsuariosDialogController',
        templateUrl: 'app/main/reporteUsuarios/EditarUsuarios/EditarUsuarios.html',
        parent: angular.element($document.find('#content-container')),
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
          usuario: usuario
        }
      });
    }


    vm.dtOptions = {
      dom: '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
      pagingType: 'simple',
      autoWidth: false,
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
  }
})();

