(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductDetailController', ProductDetailController);

    function ProductDetailController(productId, ProductResource) {

        var vm = this;

        vm.product = ProductResource.get({ productId: productId }, function() {
        }); // get() returns a single entry


    }

}());