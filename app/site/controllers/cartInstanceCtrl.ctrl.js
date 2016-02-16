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
                tax: cartObject.total*.13,
                final_total: cartObject.total*1.13,
            }
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