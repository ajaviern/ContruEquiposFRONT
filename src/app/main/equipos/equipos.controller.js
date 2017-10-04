/**
 * Created by Erley on 10/11/2016.
 */

(function ()
{
    'use strict';

    angular
        .module('app.equipos')
        .controller('equiposController', equiposController);

    /** @ngInject */
    function equiposController($state,DialogFactory, EquiposService, CategoriaEquiposService)
    {
        var vm = this;
        vm.equipos = []; // esto es  un array para guardar el listado de equipos.
        vm.equipo = {}; //formulario hppppppppppp
        vm.categoria = {};
        vm.categorias = [];// esto es  un array para guardar el listado de categorias.


        vm.createEquipo = function () {

            var p = EquiposService.createEquipo(vm.equipo);
            p.then(
                function (datos) {

                    var respuesta =datos.data;

                    if(respuesta.error){
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    }else{
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                        vm.CargarTodosLosEquipos();
                    }
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        };



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


        vm.createCategoriaEquipo = function () {

            if(vm.categoria.categoria) {
                var p = CategoriaEquiposService.createCategoriaEquipo(vm.categoria);
                p.then(
                    function (datos) {

                        DialogFactory.ShowSimpleToast("Categoria registrada...");
                        //  $state.go('app.index', {});
                        vm.LimpiarCategoria();
                        vm.CargarTodasLasCategorias();
                    },
                    function (error) {
                        DialogFactory.ShowSimpleToast(error.error_description);
                    }
                )
            }else{
                //aler("asd");
                DialogFactory.ShowSimpleToast("Nombre categoria Inválido");
            }
        }

        /**
         * Metodo para Eliminar Categorias
         * @param cod = id de categoria
         * @constructor
         */
        vm.EliminarCategoriaEquipos = function (cod) {
            var p = CategoriaEquiposService.EliminarCategoriaEquipos(cod);
            p.then(
                function (datos) {

                    DialogFactory.ShowSimpleToast("Categoria Eliminada...");
                    //  $state.go('app.index', {});
                    vm.CargarTodasLasCategorias();

                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);
                }
            )
        }

        /**
         * Metodo para Eliminar Categorias
         * @param cod = id de categoria
         * @constructor
         */
        vm.EliminarEquipos = function (cod) {
            var p = EquiposService.EliminarEquipos(cod);
            p.then(
                function (datos) {

                    DialogFactory.ShowSimpleToast("Equipo Eliminado...");
                    //  $state.go('app.index', {});
                    vm.CargarTodosLosEquipos();
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        }

        vm.LimpiarCategoria = function () {
            vm.categoria = {};
        }

        vm.getSelectedText = function() {
            return vm.cat.cats;
        };



        vm.CargarTodosLosEquipos();
        vm.CargarTodasLasCategorias();

        //vm.EliminarCategoriaEquipos();
        //        alert  (user._getIdRol());

    }
})();