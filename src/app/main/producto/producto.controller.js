/**
 * Created by Javier Nuñez on 13/08/2017.
 */

(function ()
{
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoController', ProductoController);

    /** @ngInject */
    function ProductoController($state,DialogFactory, CategoriaEquiposService,ProductosService)
    {
        var vm = this;
        vm.productos = []; // esto es  un array para guardar el listado de equipos.
        vm.producto = {};// este es el objeto = representa el formulario

        vm.createProducto = function () {
            var p = ProductosService.createProductos(vm.producto);
            p.then(
                function (datos) {

                    DialogFactory.ShowSimpleToast("Producto registrado...");
                    //$state.go('app.index', {});
                    vm.CargarTodosLosProductos();
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        };



        vm.CargarTodosLosProductos = function () {
            var p = ProductosService.getAllProductos();

            p.then(
                function (respuesta) {
                    //  DialogFactory.ShowSimpleToast("Equipo registrado...");
                    //  $state.go('app.index', {});
                    if(respuesta.error){
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    }else{
                        vm.productos = respuesta.data.data;
                    }
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);
                }
            )
        }




        /**
         * Metodo para Eliminar Productos
         * @param cod = id de producto
         * @constructor
         */
        vm.EliminarProductos = function (cod) {
            var p = ProductosService.EliminarProductos(cod);
            p.then(
                function (datos) {

                    DialogFactory.ShowSimpleToast("Producto Eliminado Exitosamente :)");
                    //  $state.go('app.index', {});
                    vm.CargarTodosLosProductos();

                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);
                }
            )
        }



        vm.LimpiarProducto = function () {
            vm.producto = {};
        }

        vm.getSelectedText = function() {
            return vm.cat.cats;
        };



        vm.CargarTodosLosProductos();
        //vm.EliminarCategoriaEquipos();
        //        alert  (user._getIdRol());

    }
})();
