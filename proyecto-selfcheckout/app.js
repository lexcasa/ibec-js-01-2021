// Definimos el modulo de la app de angularjs dentro de nuestro archivo
// app.js
// Obs: los parentesis rectos van servir para injectar dependencias
let app = angular.module('app', [])
const API = 'https://crudcrud.com/api/7e79cd41b62447588a163a3ca317deca/'
// Generamos un controller
app.controller('MainCtrl', ['$scope', function ($scope) {

	$scope.cod = ""
	$scope.prodEscaneados = []
	$scope.productos = [
		{
			cod: "ANMC123123",
			nombre: "Manteca conaprole 200g",
			pesosTotales: [ 
				205,
				215,
				209
			],
			pesoNeto: 200,
			precio: 70,
			moneda: "UYU"
		},
		{
			cod: "AA123",
			nombre: "Manteca calcar 198g",
			pesosTotales: [ 
				199,
				200,
				201
			],
			pesoNeto: 198,
			precio: 65,
			moneda: "UYU"
		}
	]

	$scope.buscarProductoPorCod = function () {
		console.log("$scope.cod", $scope.cod)

		let cod = angular.copy($scope.cod)

		$scope.productos.map( function (item) {
			if(item.cod === cod){
				$scope.prodEscaneados.push(item)
			}
		})

		console.log("elementos escaneados: ", $scope.prodEscaneados)
		
	}
	
}])