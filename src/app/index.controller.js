(function ()
{
    'use strict';

    angular
        .module('fuse')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController(fuseTheming)
    {
       if(user._getEmail()==undefined){
           user.invitado();
       }
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;

        //////////
    }
})();