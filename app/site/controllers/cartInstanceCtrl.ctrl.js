(function() {
    'use strict'
    angular
        .module('shopApp')
        .controller('cartInstanceCtrl', cartInstanceCtrl);

    function cartInstanceCtrl($uibModalInstance) {
        var ctrl = this;
        
        ctrl.$uibModalInstance=$uibModalInstance;
        ctrl.close=close;

        function close(){
        	ctrl.$uibModalInstance.close();
        }


       

    }




})();