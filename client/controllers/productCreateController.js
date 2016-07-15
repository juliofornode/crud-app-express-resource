(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductCreateController', ProductCreateController);

    function ProductCreateController($state, ProductResource) {
        var vm = this;
        vm.product = new ProductResource();

        vm.create = function() {
            vm.product.$save(function() {
                $state.go('products');
            });
        };
        
        vm.cancel = function() {
            $state.go('products');
        };

    }

}());