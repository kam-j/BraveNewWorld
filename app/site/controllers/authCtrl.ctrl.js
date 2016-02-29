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
                ctrl.api=api;
                
                ctrl.email=null;
                ctrl.password=null;

                if(localStorage.authToken){
                    ctrl.state.go('admin');
                }
                
                function goAdmin() {
                    console.log('Hi');
                    var ctrl=this;
                    var payload = {
                        email:ctrl.email,
                        password:ctrl.password
                    }
                    ctrl.api.request('/users/login',payload,'POST')
                        .then(function(res){
                        console.log(res.status);
                        //successfull response
                        if(res.status == 200){
                        ctrl.auth_btn = "Success";
                            //user exists
                            if(res.data.user != null){
                            ctrl.state.go('admin');
                            }
                        } else{
                            ctrl.auth_btn = 'Invalid Password';
                        }   
                
                },function(){
                //error
                console.log(res.status);
                ctrl.auth_btn = "Error: Check console";
             })
            
          
        };

            }

      })();