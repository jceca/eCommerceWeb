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
                templateUrl: 'view/mainPage.html',
                controller: 'mainCtrl'
            })
            .state('about', {
                url:'/about',
                templateUrl: 'view/about.html',
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
                templateUrl: 'view/mainPage.html',
                controller: 'mainCtrl'
            })
            .when('/about', {
                templateUrl: 'view/about.html',
                controller: 'aboutCtrl'
            })
            .when('/units', {
                templateUrl: 'view/units.html',
                controller: 'unitsController'
            })
            .when('/units/:unitId', {
                templateUrl: 'view/units.html',
                controller: 'unitsController'
            })
            .otherwise({
                redirectTo: '/'
            })
    });