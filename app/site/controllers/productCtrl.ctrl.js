(function() {
    'use strict'
    angular
        .module('shopApp')
        .controller('productCtrl', ProductCtrl);


    function ProductCtrl(api, productSrv, $stateParams, $uibModal, products,$state) {

        var ctrl = this;
        ctrl.api = api;
        ctrl.productSrv = productSrv;
        ctrl.addProduct = addProduct;
        ctrl.categories = ctrl.productSrv.categories;
        ctrl.products = products;
        ctrl.$uibModal = $uibModal;
        ctrl.goLogin = goLogin;
<<<<<<< HEAD
        ctrl.goToDetails = goToDetails;
        ctrl.state = $state;
=======
        ctrl.state= $state;
        ctrl.catFilter="";
>>>>>>> dclancy13/master

        ctrl.cart = [];
        ctrl.animationsEnabled = true;


        ctrl.open = open;

        ctrl.addToCart=addToCart;

        function addToCart(product){
            

            ctrl.cart.push(product);
            console.log(ctrl.cart);
        }

        function goToDetails(product){
             var ctrl=this;
            ctrl.state.go('productdetails',{productId:product.id});
            console.log(product);
        }


        function addProduct() {
            var product = {
                name: ctrl.name,
                image: ctrl.image,
                description: ctrl.description,
                category: ctrl.category,
                price: ctrl.price,
                quantity: ctrl.quantity,
                status: ctrl.status
            }

            ctrl.productSrv.addProduct(product);
        }

        
        function open() {
            console.log('modal');
            var modalInstance = $uibModal.open({
                animation: ctrl.animationsEnabled,
                templateUrl: 'site/partials/cart.html',
                controller: 'cartInstanceCtrl as ctrl',
                size: 'sm',
                resolve: {
                    cart: function() {
                        return ctrl.cart;
                    }
                }


            });

            modalInstance.result.then(function() {
                ctrl.cart = [];

            });
        };



        function goLogin() {
            console.log('Hi');
            var ctrl=this;
            ctrl.state.go('login');
            
          
        };


        ctrl.toggleAnimation = function() {
            ctrl.animationsEnabled = !ctrl.animationsEnabled;
        };



    }

})();