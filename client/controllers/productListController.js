(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductListController', ProductListController);

    function ProductListController(ProductResource) {

        var vm = this;

        //list all products
        vm.products = ProductResource.query(function() {
        }); //query() returns all the entries

        vm.imageShowed = true;

        vm.imageToggle = function() {
            vm.imageShowed = !vm.imageShowed;
        }
    }

}());


