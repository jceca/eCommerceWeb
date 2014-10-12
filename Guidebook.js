/**
 * Created by Javier on 04/10/2014.
 */
/*
angular
    .module('guide', ['ui.router'])

// Configuración de las rutas
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/mainPage.html',
                controller: 'mainCtrl'
            })
            .state('about', {
                url:'/about',
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl'
            })
    }]);
    */
angular
    .module('guide', ['ngRoute'])

// Configuración de las rutas
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/mainPage.html',
                controller: 'mainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl'
            })
            .when('/units', {
                templateUrl: 'views/units.html',
                controller: 'unitsController'
            })
            .when('/units/unit1', {
                templateUrl: 'views/units/unit1.html',
                controller: 'unitsController'
            })
            .otherwise({
                redirectTo: '/'
            })
    });