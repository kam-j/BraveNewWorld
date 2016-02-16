(function() {
    'use strict'

    angular
        .module('shopApp')
        .controller('AdminCtrl', AdminCtrl);


    function AdminCtrl($state, productSrv, $stateParams, $scope) {
        var ctrl = this;

        ctrl.$state = $state;
        ctrl.productSrv = productSrv;
        ctrl.updateProduct = updateProduct;
        ctrl.passProduct = passProduct;
        ctrl.enable = false;
        ctrl.product = {};

        $scope.$watch(function() {
            return ctrl.productSrv.products;
        }, function() {

            ctrl.products = ctrl.productSrv.products;

        });



        function passProduct(product) {
            ctrl.product = product;
            console.log(product);
            ctrl.$state.go('admin.edit');
        }

        function updateProduct() {
            var product = {
                name: ctrl.product.name,
                image: ctrl.product.image,
                description: ctrl.product.description,
                category: ctrl.product.cateogry,
                price: ctrl.product.price,
                quantity: ctrl.product.quantity,
                id: ctrl.product.id
            }

            ctrl.productSrv.updateProduct(product);
        }

    }   
        
})();