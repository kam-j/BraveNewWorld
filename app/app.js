'use strict';

var app = angular.module('shopApp',['ui.router','ui.bootstrap','ngAnimate']);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider

  .state('home',{
    url:'/',
    templateUrl:'site/partials/shop-main.html',
    controller: 'productCtrl as ctrl',
    resolve: {
      products: function(productSrv){
        return productSrv.getProducts();
      }
    }
    
  })


  .state('admin',{
    url:'/admin',
    templateUrl:'site/partials/admin.html',
    controller: 'AdminCtrl as ctrl',
    resolve: {
      products: function(productSrv){
        return productSrv.getProducts();
      }
    }
    
  })

  .state('admin.orders',{
    url:'/orders',
    templateUrl:'site/partials/orders.html',
    controller: 'ordersCtrl as ctrl',
    resolve: {
      orders: function(productSrv){
        return productSrv.getOrders();
      }
    }
    
  })

  .state('admin.dash',{
    url:'/dash',
    templateUrl:'site/partials/dash.html',
    resolve: {
      products: function(productSrv){
        return productSrv.getProducts();
      }
    }
  })

  .state('login',{
    url:'/login',
    templateUrl: 'site/partials/login-main.html',
    controller: 'authCtrl as ctrl',
  })
    

  .state('admin.add_product',{
    url:'/add_product',
    templateUrl: 'site/partials/add_product.html',
    controller: 'productCtrl as ctrl',
  })

  .state('admin.edit',{
    url:'/edit',
    templateUrl:'site/partials/edit_product.html',
  })

  .state('admin.productdetails',{
    url:'/details/:productId',
    templateUrl:'site/partials/admin-productdetails.html',
    controller: 'detailsCtrl as ctrl',
    resolve: {
      products: function(productSrv,$stateParams){
        return productSrv.getProduct($stateParams.productId);
        return productSrv.getProduct();
      }
    }
  })
 
	$httpProvider.interceptors.push(function(){
       return {
           request: function(config) {
               return config;
           },
           response: function(response) {
               var auth_token = response.headers('authentication');
               if(localStorage.authToken == undefined && auth_token != null){
               	localStorage.authToken = auth_token;
               }
               return response;
           }
       }
   });

});
