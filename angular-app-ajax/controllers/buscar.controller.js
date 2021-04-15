app.controller('BuscarCtrl', ['$scope','$rootScope','$http', function ($scope, $rootScope, $http) {
	console.log("run :: BuscarCtrl")
	$scope.isLoading = false
	$scope.search = {
		nombrePais: ''
	}

	$rootScope.paises = []


	$scope.restablecer 	= function () {
		$rootScope.paises = []
		$scope.search.nombrePais = ""
	}

	$scope.buscarPais = function () {
		$scope.isLoading = true
		if($scope.search.nombrePais.length > 0){
			console.log("Clic 2")
			let model = "name/"
			let url =  API + model + $scope.search.nombrePais
			$http.get(url).then( function (response) {

				console.log("Response", response)
				$rootScope.paises = response.data
				$scope.search.nombrePais = ""

				$scope.isLoading = false

				// La segunda funcion 
				// deberia capturar los errores que puede enviar el servidor
				// al cliente
			}, function (error) {
				console.log("Error: ", error)

				if(error.data.message){
					alert(error.data.message)
				}

				// Si da error limpiar el campo de busqueda
				$scope.search.nombrePais = ""
				$scope.isLoading = false
			})
		}
	}
}])