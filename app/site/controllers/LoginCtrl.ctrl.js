(function() {
    angular
        .module('shopApp')
        .controller('LoginCtrl', LoginController);

    function LoginController($state, api) {
        var ctrl = this;
        ctrl.api = api;
        ctrl.$state = $state;
        ctrl.auth_btn='Continue';
        ctrl.password = null;
        ctrl.email = null;

        ctrl.login = login;


        function login() {

            var payload = {

                email: ctrl.email,
                password: ctrl.password
            }

            ctrl.api.request('/users/login', payload, 'POST')
                .then(function(res) {
                    if (res.status == 200) {
                        ctrl.auth_btn = "Success";
                        //user exists
                        if (res.data.user != null) {
                            ctrl.$state.go('admin.dash');
                        }
                    } else {
                        ctrl.auth_btn = 'Invalid Password';
                    }
                });
        }


    }
})();