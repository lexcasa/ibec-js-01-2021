app.controller('FormularioCtrl', ['$scope','$http','$rootScope', function ($scope, $http, $rootScope) {
	console.log("FormularioCtrl :: ")

	$scope.usuarios = []
	$scope.usuario = {}


	// Defino la funcion
	let runUsers = function () {
		let model = '/usuarios'
		let url   = API + model

		$http.get(url).then( function (response) {
			$scope.usuarios = response.data
		}, function  (error) {
			alert("Error de servidor")
		})
	}

	// Para soportar el listado 
	// Corro los usuarios
	// En tiempo de ejecuccion del controller
	runUsers()

	$scope.agregarUsuario = function () {
		let model   = '/usuarios'
		let usuario = angular.copy($scope.usuario)
		let url 	= API + model

		console.log("$rootScope usuario: ", $scope.usuario)

		// API + model = https://crudcrud.com/api/7f6f2f2ffc8f4db7bb806e7e2ac55126/usuarios	
		// Si no tiene _id entonces lo crea
		if(!usuario._id){
			$http.post(url, usuario).then( function (response) {
				console.log("Sucess: ", response)

				$scope.usuario = {}

				// Ejecuto la funcion para listarme todos los usuarios
				runUsers()
			
			}, function (error) {
				console.log("Error: ", error)

				$scope.usuario = {}
			
			})
		} else {
			// Ahi utilizamos el PUT
			const id = angular.copy(usuario._id)
			delete usuario._id

			// Concatenar la ID
			url += '/' + id

			$http.put(url, usuario).then( function (response) {
				console.log("Sucess: ", response)

				$scope.usuario = {}

				// Ejecuto la funcion para listarme todos los usuarios
				runUsers()
			
			}, function (error) {
				console.log("Error: ", error)

				$scope.usuario = {}
			
			})
		}
	}

	$scope.eliminarUsuario = function (id) {
		console.log("id: ", id)
		let model   = '/usuarios/'
		let url 	= API + model + id 

		// Verifico con el usuario si quiere eliminar
		if(confirm("Esta seguro que quiere eliminar al usuario?")){
			$http.delete(url).then( function (response) {
				console.log("Sucess: ", response)

				// Recargar la tabla con los usuarios
				runUsers()

			}, function (error) {
				console.log("Error: ", error)
			})
		}
	}

	$scope.selectUsuario = function (user){
		console.log("user: ", user)
		$scope.usuario = angular.copy(user)

		console.log("scope usuario: ", $scope.usuario)
	}
}])