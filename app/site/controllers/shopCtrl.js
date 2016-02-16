(function() {
    angular
        .module('shopApp')
        .controller('ShopCtrl', ShopController);


	function ShopCtrl($scope,api,productSrv, products){
		var ctrl = this;
	
		$scope.$watch(function(){
	    	return productSrv.products;
		}, function (newValue) {
		    ctrl.products = productSrv.products;
		});
	}
	
})();