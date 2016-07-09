(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductCreateController', ProductCreateController);

    function ProductCreateController($http, $state) {
        var vm = this;

        vm.create = function() {
            $http.post('/api/products', vm.product)
                .success(function(gotFromApi) {
                    vm.product = '';
                    $state.go('products');
                });
        };


        vm.cancel = function() {
            $state.go('products');
        };

    }

}());