(function() {
        'use strict'
        angular
            .module('shopApp')
            .controller('detailsCtrl', DetailsCtrl);


        function DetailsCtrl(productSrv, $stateParams, product, $state, api) {
        	var ctrl= this;
        	ctrl.productSrv= productSrv;
            ctrl.product= product;
            console.log(ctrl.product);
            ctrl.api= api
            ctrl.state= $state;
            console.log(ctrl.product);

            
        }




    })();