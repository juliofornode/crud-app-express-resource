(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductListController', ProductListController);

    function ProductListController($http) {

        var vm = this;

        //list all products
        $http.get('/api/products')
            .success(function(gotFromApi) {
                vm.products = gotFromApi;
            });


        vm.imageShowed = true;

        vm.imageToggle = function() {
            vm.imageShowed = !vm.imageShowed;
        }
    }

}());


