(function() {
        'use strict'
        angular
            .module('shopApp')
            .controller('detailsCtrl', DetailsCtrl);


        function DetailsCtrl(productSrv,products, $state, api) {
        	var ctrl= this;
        	ctrl.productSrv= productSrv;
            ctrl.products= products;
            ctrl.api= api
            ctrl.state= $state;

            

        

        }
    })();