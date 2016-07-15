(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductEditController', ProductEditController);

    function ProductEditController(productId, $state, ProductResource) {
        var vm = this;


        vm.product = ProductResource.get({ productId: productId }, function() {
        });


        vm.save = function() {
            vm.product.$update(function() {
                $state.go('products');
            });
        };

        vm.remove = function() {
            vm.product.$delete(function() {
                $state.go('products');
            });
        };

        vm.cancel = function() {
            $state.go('products');
        };

    }

}());