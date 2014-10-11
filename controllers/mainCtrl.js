/**
 * Created by Javier on 11/10/2014.
 */

angular.module('guide')
    .controller('mainCtrl', ['$scope', function ($scope) {
        $scope.model = {
            titulo: "Comercio Electrónico",
            cuerpo: "Esta página web está dedicada a la asginatura de Comercio Electrónico",
            descp: "Escuela Superior de Informática - UCLM Ciudad Real"
        }
    }]);
