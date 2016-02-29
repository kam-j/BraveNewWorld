(function() {
        'use strict'
        angular
            .module('shopApp')
            .controller('productCtrl', ProductCtrl);


        function ProductCtrl(api, productSrv, $stateParams, $uibModal, products, $state) {

            var ctrl = this;
            ctrl.api = api;
            ctrl.productSrv = productSrv;
            ctrl.addProduct = addProduct;
            ctrl.categories = ctrl.productSrv.categories;
            ctrl.products = products;
            ctrl.$uibModal = $uibModal;
            ctrl.goLogin = goLogin;
            ctrl.state = $state;
            ctrl.catFilter = "";
            ctrl.state = $state;

            ctrl.catFilter = "";


            ctrl.cart = [];
            ctrl.animationsEnabled = true;

            ctrl.prodDetailsOpen = prodDetailsOpen;
            ctrl.open = open;

            ctrl.addToCart = addToCart;
            ctrl.currentProd = '';

            function addToCart(product) {

                console.log('working');
                var prod = {
                    name: product.name,
                    id: product.id,
                    price: product.price,
                    quantity: 1
                }
                if (ctrl.cart.length > 0) {
                    var exists = false;
                    for (var item in ctrl.cart) {
                        if (ctrl.cart[item].name == prod.name) {
                            ctrl.cart[item].quantity++;
                            exists = true;
                        }

                    }
                    if (!exists) {
                        ctrl.cart.push(prod);
                    }
                } else {
                    ctrl.cart.push(prod);
                    console.log('new prod added', prod);
                }

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

                modalInstance.result.then(function(cart) {
                    ctrl.cart = cart;

                });
            };

            function prodDetailsOpen(product) {
                var modalInstance = $uibModal.open({
                        animation: ctrl.animationsEnabled,
                        templateUrl: 'site/partials/admin-productdetails.html',
                        controller: 'detailsCtrl as ctrl',
                        resolve: {
                            product: function() {
                                return product;
                            }
                        }
                    });
                };



                function goLogin() {
                    console.log('Hi');
                    var ctrl = this;
                    ctrl.state.go('login');


                };


                ctrl.toggleAnimation = function() {
                    ctrl.animationsEnabled = !ctrl.animationsEnabled;
                };



            }

        })();