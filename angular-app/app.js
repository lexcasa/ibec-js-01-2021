// Definimos el modulo de la app de angularjs dentro de nuestro archivo
// app.js
// Obs: los parentesis rectos van servir para injectar dependencias
let app = angular.module('app', [])

// Generamos un controller
app.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.usuario = {}
	$scope.indice  = undefined 

	$scope.usuarios = [
		{
			nombre: "Alex",
			apellido: "Casadevall",
			edad: 29,
			email: "lexcasa@gmail.com"
		},
		{
			nombre: "Juan",
			apellido: "Casadevall",
			edad: 26,
			email: "juan@gmail.com"
		},
		{
			nombre: "Pedro",
			apellido: "Correa",
			edad: 12,
			email: "pcorrea@gmail.com"
		}
	]

	$scope.agregarUsuario = function () {
		console.log($scope.usuario)

		// Creo una copia limpia del objeto usuario
		let usuario = angular.copy($scope.usuario)


		if($scope.indice === undefined){
			// Agrego al usuario a la lista de usuarios
			$scope.usuarios.push(usuario)
		} else {
			$scope.usuarios[$scope.indice] = usuario
		}
		

		// limpio el objeto usuario del scope
		$scope.usuario = {}
		$scope.indice  = undefined
	}

	$scope.eliminarUsuario = function (indice) {
		console.log("Indice correcto: ", indice)

		$scope.usuarios.splice(indice, 1)
	}

	$scope.selectUsuario  = function (usuario, indice) {
		// Cargar el usuario dentro del formulario
		// Asignando el parametro usuario dentro de la variable del scope usuario
		$scope.usuario = angular.copy(usuario)
		$scope.indice  = indice
	}
}])