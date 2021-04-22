app.controller('ListadoCtrl', ['$scope','$rootScope','$http', function ($scope, $rootScope, $http) {
	console.log("ListadoCtrl :: ")
	$rootScope.usuarios = []
	$rootScope.usuario  = {}

	// Defino la funcion
	let runUsers = function () {
		let model = '/usuarios'
		let url   = API + model

		$http.get(url).then( function (response) {
			$rootScope.usuarios = response.data
		}, function  (error) {
			alert("Error de servidor")
		})
	}
	// Ejecuto la funcion
	runUsers()

	$rootScope.selectUsuario = function (user){
		console.log("user: ", user)
		$rootScope.usuario = angular.copy(user)

		console.log("rootScope usuario: ", $rootScope.usuario)
	}
	

}])