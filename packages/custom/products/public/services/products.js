(function() {
    'use strict';

    function Products($http, $q) {
        return {
            name: 'products',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/products/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.products')
        .factory('Products', Products);

    Products.$inject = ['$http', '$q'];

})();
