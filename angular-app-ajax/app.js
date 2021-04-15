let app 	= angular.module('app', [])
const API 	= 'https://restcountries.eu/rest/v2/'
app.controller('MainCtrl', ['$scope','$http', function ($scope, $http) {
	$scope.titulo = "Buscador de Paises"
}])