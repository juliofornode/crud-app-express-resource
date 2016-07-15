(function() {

    "use strict";

    angular.module('myApp')
        .factory('ProductResource', ProductResource);

    function ProductResource($resource) {
        return $resource('/api/products/:productId', { productId: '@_id' }, {
            update: {
                method: 'PUT' // this method issues a PUT request
            }
        });
    }


}());