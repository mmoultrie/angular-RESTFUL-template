var app = angular.module('appname', []);

app.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('login', {
            url:'/login',
            controller: 'LoginController',
            templateUrl: 'plugins/modules/authentication/views/login.html'
        })
        .state('/', {
            url:'/home',
            controller: 'HomeController',
            templateUrl: 'templates/home.html'
        })


});

app.run(function () {

});
