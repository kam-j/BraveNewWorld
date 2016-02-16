(function() {
    'use strict'
    angular
        .module('shopApp')
        .controller('authCtrl', AuthCtrl);

            function AuthCtrl(api,$state) {
            	console.log('hello');
            	var ctrl= this;
            	ctrl.auth_btn ="Button";
            	ctrl.state= $state;
            	ctrl.goAdmin= goAdmin;

            	
            	function goAdmin() {
            		console.log('Hi');
            		var ctrl=this;
            		ctrl.state.go('admin');
            
          
        };

            }

      })();
