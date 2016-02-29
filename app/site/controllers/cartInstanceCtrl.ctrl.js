(function() {
    'use strict'
    angular
        .module('shopApp')
        .controller('cartInstanceCtrl', cartInstanceCtrl);

    function cartInstanceCtrl($uibModalInstance, productSrv, cart) {
        var ctrl = this;
        ctrl.productSrv = productSrv;
        ctrl.cart = cart;
        ctrl.$uibModalInstance = $uibModalInstance;
        ctrl.close = close;
        ctrl.checkOut = checkOut;
        ctrl.cartTotal = cartTotal;
        ctrl.remove=remove;

        function remove(item){
            for (var index in ctrl.cart){
                if(ctrl.cart[index].name==item.name){
                   ctrl.cart= ctrl.cart.slice(0,index).concat(ctrl.cart.slice(index+1));
                }
            }
        }
       

        // checkout
        function checkOut() {

            var cartObject = {
                cart: ctrl.cart,
                total: cartTotal(ctrl.cart),
                tax: (cartTotal(ctrl.cart) * .13).toFixed(2),
                final_total: (cartTotal(ctrl.cart) * 1.13).toFixed(2),
            }
            ctrl.productSrv.addOrder(cartObject);
            var emptyCart=[];
            ctrl.$uibModalInstance.close(emptyCart);
        }


        

        function cartTotal(cart) {
            var total = 0;
            cart.forEach(function(product) {
                total += product.price;
            });
            return total;
        }

        function close(cart) {
            ctrl.$uibModalInstance.close(cart);
        }




    }




})();