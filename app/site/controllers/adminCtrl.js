(function() {
    angular
        .module('shopApp')
        .controller('AdminCtrl', AdminCtrl);

	function AdminCtrl($scope,$state,products,productSrv){
		var ctrl = this;
		ctrl.$state = $state;
		ctrl.$scope = $scope;
		ctrl.products = products;
		ctrl.productSrv = productSrv;

		//check if logged in
		if(localStorage.authToken == undefined || localStorage.authToken == null){
			$state.go('auth');
		}
					
		ctrl.products = products;
		if(ctrl.products.length > 0 ){
			ctrl.is_products = true;
		}

		//watch for updates to products object
		$scope.$watch(function(){
	    	return productSrv.products;
		}, function (newValue) {
			if(productSrv.products.length > 0){
			    ctrl.products = productSrv.products;
			    ctrl.is_products = true;
			}
		});

	function editProduct(product){
		ctrl.$state.go('admin.edit_product',{productId:product.id});
	}

	function logout(){
		localStorage.removeItem('authToken');
		ctrl.$state.go('auth');
	}


}
})();