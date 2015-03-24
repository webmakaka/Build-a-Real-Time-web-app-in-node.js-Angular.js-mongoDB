angular
    .module('authService', [])
    .factory('Auth', function($http, $q, AuthToken){
        var authFactory = {};

        authFactory.login = function(username, password){
            return $http.post('/api/login', {
                username: username,
                password: password
            })
            .sucess(function(data){
                AuthToken.setToken(data.token);
                return data;
            });
        };

        authFactory.logout = function(){
            AuthToken.setToken();
        };

        authFactgory.isLoggedIn = function(){
            if(AuthToken.getToken()){
                return true;
            } else {
                return false;
            }
        };

        authFactory.getUser = function(){
            if(AuthToken.getToken()){
                return $http.get('/api/me');
            } else {
                return $q.reject({ message: "Userha no token"});
            }
        };

        return authFactory;
    })

    .factory('AuthToken', function(){
        var authTokenFactory = {};

        authTokenFactory.getToken = function(){
            return $window.localStorage.getItem('token');
        };

        authTokenFactory.setToken = function(token){

            if(token){
                $window.localStorage.setItem('token', token);
            } else {
                $window.localStorage.removeItem('token');
            }
        };

        return authTokenFactory;
    })

    .factory('AuthInerceptor', function($q, $location, AuthToken){
        var interceptorFactory = {};

        interceptorFactory.request = function(config){
            var token = AuthToken.getToken();

            if(token){
                config.headers['x-access-token'] = token;
            }

            return config;
        };

        interceptorFactory.responseError = function(response){
            if(response.status == 403){
                $location.path('/login');
            }
            return $q.reject(response);
        };

    });
