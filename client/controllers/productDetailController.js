(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductDetailController', ProductDetailController);

    function ProductDetailController(productId, $http) {

        var vm = this;

        $http.get('/api/products/' + productId).success(function(gotFromApi) {
            vm.product = gotFromApi;
        });

    }

}());