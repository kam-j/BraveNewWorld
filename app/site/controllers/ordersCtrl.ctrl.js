(function() {
        'use strict'
        angular
            .module('shopApp')
            .controller('ordersCtrl', OrdersCtrl);


        function OrdersCtrl(productSrv,orders, $scope) {
        	var ctrl=this;
        	ctrl.productSrv=productSrv;
            ctrl.orders=orders;
            ctrl.clearOrder=clearOrder;


           $scope.$watch(function() {
            return ctrl.productSrv.orders;
        }, function() {

            ctrl.orders = ctrl.productSrv.orders;

        });



            function clearOrder(id)
            {
            	console.log('clear reached');
            	ctrl.productSrv.deleteOrder(id);
            }
        }
            

        

})();