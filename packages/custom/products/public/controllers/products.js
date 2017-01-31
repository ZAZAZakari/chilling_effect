(function() {
    'use strict';

    /* jshint -W098 */

    function ProductsController($scope, Global, Products, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'products'
        };

        $scope.checkCircle = function() {
            Products.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.products')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['$scope', 'Global', 'Products', '$stateParams'];

})();
