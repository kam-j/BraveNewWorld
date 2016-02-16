(function() {
    'use strict'

    angular
        .module('shopApp')
        .service('productSrv', ProductService);

    function ProductService($state, api) {

        this.$state = $state;
        this.api = api;
        this.products = [];
        this.getProducts = getProducts;
        this.addProduct = addProduct;
        this.updateProduct = updateProduct;
        this.deleteProduct=deleteProduct;
        this.addOrder=addOrder;
        this.orders=[];
        this.getOrders=getOrders;



        this.categories = [{
            label: 'Pens',
            value: 'pens'
        }, {
            label: 'Pencils',
            value: 'pencils'
        }, {
            label: 'Planners',
            value: 'Planners'
        }, {
            label: 'Notebooks',
            value: 'notebooks'
        },];

        function addOrder(order){
            var srv=this;
            order.cart = JSON.stringify(order.cart);
            this.api.request('/orders', order, 'POST')
            .then(function(response){
                console.log('order added',response.data.orders);
                return;
            });
        }

        function addProduct(product) {
            var srv = this;
            this.api.request('/products', product, 'POST')
                .then(function(response) {
                    srv.getProducts();
                    srv.$state.go('admin.dash');
                });
        }

        function getOrders(){
            var srv=this;
            return this.api.request('/orders', {}, 'GET')
                .then(function(response) {
                    srv.orders = response.data.orders;
                    console.log('orders: ',srv.orders);
                    return response.data.orders;


                });
        }

        function deleteProduct(productId) {
            var srv=this;
            this.api.request('/products/' + productId, {}, 'DEL')
			.then(function(response){
				srv.getProducts();
				srv.$state.go('admin.dash');
			}) ;           
            

        }



        function getProducts() {
            var srv = this;
            return this.api.request('/products', {}, 'GET')
                .then(function(response) {
                    console.log(response.data);
                    srv.products = response.data.products;
                    return response.data.products;
                });
        }

        function getProduct(productId) {
            var srv = this; 
            return this.api.request('/products'/+productId, {}, 'GET')

        }

        

        function updateProduct(product) {
            var srv = this;
            this.api.request('/products/' + product.id, product, 'PUT')
                .then(function(response) {
                	srv.getProducts();
                    srv.$state.go('admin.dash');
                });
        }

    }





})();