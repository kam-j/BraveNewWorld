(function() {
    'use strict'
    angular
        .module('shopApp')
        .controller('cartInstanceCtrl', cartInstanceCtrl);

    function cartInstanceCtrl($uibModalInstance,productSrv,cart) {
        var ctrl = this;
        ctrl.productSrv=productSrv;
        ctrl.cart=cart;
        ctrl.$uibModalInstance=$uibModalInstance;
        ctrl.close=close;
        ctrl.checkOut=checkOut;
        ctrl.cartTotal=cartTotal;
        // checkout
        function checkOut(){

            var cartObject={
                cart: ctrl.cart,
                total: cartTotal(ctrl.cart),
                tax: (cartTotal(ctrl.cart)*.13).toFixed(2),
                final_total: (cartTotal(ctrl.cart)*1.13).toFixed(2),
            }
            console.log(cartObject);
            ctrl.productSrv.addOrder(cartObject);
            ctrl.$uibModalInstance.close();
        }

        function cartTotal(cart){
            var total=0;
            cart.forEach(function(product){
                total+=product.price;
            });
            return total;
        }

        function close(){
        	ctrl.$uibModalInstance.dismiss();
        }

 
       

    }




})();