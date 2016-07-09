(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductEditController', ProductEditController);

    function ProductEditController($http, productId, $state) {
        var vm = this;


        $http.get('/api/products/' + productId).success(function(gotFromApi) {
            vm.product = gotFromApi;
        });

        vm.save = function() {
            $http.put('/api/products/' + vm.product._id, vm.product).success(function(gotFromApi) {
                $state.go('products');
            })
        };

        vm.remove = function() {
            $http.delete('/api/products/' + productId).success(function(gotFromApi) {
                $state.go('products');
            });
        };

        vm.cancel = function() {
            $state.go('products');
        };

    }

}());