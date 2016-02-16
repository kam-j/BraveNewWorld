(function() {
    'use strict'
    angular
        .module('shopApp')
        .service('ordersSrv', OrdersSrv);


    function OrdersSrv($uibModal, api) {
        var srv = this;
        srv.cart = [];
        srv.animationsEnable = true;
        srv.open = function(size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });



        }

    }


})();