(function() {
    'use strict';

    function Products($stateProvider) {
        $stateProvider.state('products example page', {
            url: '/products/example',
            templateUrl: 'products/views/index.html'
        }).state('products circles example', {
            url: '/products/example/:circle',
            templateUrl: 'products/views/example.html'
        });
    }

    angular
        .module('mean.products')
        .config(Products);

    Products.$inject = ['$stateProvider'];

})();
