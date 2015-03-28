angular
    .module('MyApp', ['appRoutes', 'mainCtrl', 'authService', 'userCtrl', 'userService', 'storyService', 'storyCtrl'])
    .config(function($httpProvider){
        $httpProvider.interceptors.push('AuthInterceptor');
    });
