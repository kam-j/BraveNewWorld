(function() {
        'use strict'
        angular
            .module('shopApp')
            .controller('ordersCtrl', OrdersCtrl);


        function OrdersCtrl(productSrv,orders) {
        	var ctrl=this;
        	ctrl.productSrv=productSrv;
            ctrl.orders=orders;

            

        


    })();