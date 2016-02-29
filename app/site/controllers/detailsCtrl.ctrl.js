(function() {
        'use strict'
        angular
            .module('shopApp')
            .controller('detailsCtrl', DetailsCtrl);


        function DetailsCtrl(product, $uibModalInstance) {
        	var ctrl= this;
        	ctrl.close=close;
            ctrl.product= product;
            ctrl.$uibModalInstance=$uibModalInstance;

        function close() {
            ctrl.$uibModalInstance.dismiss();
        }

        }




    })();