/**
 * Created by Javier on 04/10/2014.
 */

var guide = angular.module('guide', ['ngRoute']);

// Configuración de las rutas
guide.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'view/mainPage.html',
            controller: 'mainController'
        })
});

guide.controller('mainController', function($scope) {
    $scope.model = {
        titulo: "Comercio Electrónico",
        cuerpo: "Esta página web está dedicada a la asginatura de Comercio Electrónico",
        descp: "Escuela Superior de Informática - UCLM Ciudad Real"
    }
});