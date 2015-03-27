angular
    .module('MyApp', ['appRoutes', 'mainCtrl', 'authService', 'userCtrl', 'userService'])
    .config(function($httpProvider){
        $httpProvider.interceptors.push('AuthInterceptor');
    });
