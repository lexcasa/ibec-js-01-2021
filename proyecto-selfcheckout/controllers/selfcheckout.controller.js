app.controller('SelfCheckoutCtrl', ['$scope', function ($scope) {
	console.log("SelfCheckoutCtrl :: ")

	$scope.q = {qProducto: "", peso: 0}

	$scope.baseProductos = [
		{
			cod: "ANMC123123",
			nombre: "Manteca conaprole 200g",
			empaques: [ 
				205,
				215,
				209
			],
			peso: 200,
			precio: 100
		},
		{
			cod: "CF1111",
			nombre: "Cafe 100g",
			empaques: [ 
				205,
				215,
				209
			],
			peso: 100,
			precio: 350
		}
	]

	$scope.productos = []
	$scope.pesos 	 = []

	$scope.ticket 	 = {
		total: 0,
		emitido: false
	}

	$scope.buscaProducto = function (){
		console.log("producto: ", $scope.q.qProducto )

		if($scope.productos.length === $scope.pesos.length){
			$scope.baseProductos.map( function (producto){
				if(producto.cod == $scope.q.qProducto){
					// Si encuentro el producto lo agrego 
					// a la lista de productos
					$scope.productos.push( angular.copy(producto) )
				}
			})
		}
	}

	$scope.pesarProductos = function (){
		let peso = undefined
		if($scope.q.peso > 0){
			peso = {
				medida: angular.copy($scope.q.peso),
				verifica: false
			}
		}

		// Asumo que lo que voy a pesar se corresponde con el ultimo elemento de la lista
		let lastIndex = $scope.productos.length - 1

		if($scope.productos[lastIndex].peso == peso.medida){
			peso.verifica = true
		}

		console.log("lastIndex :: ", lastIndex)

		if(peso){
			$scope.pesos.push( peso )

			// Luego de pesar
			// Corro los totales
			$scope.calcTotal()
		}
	}

	$scope.calcTotal = function (){
		let total = 0

		$scope.productos.map( function (producto){
			total += producto.precio
		})

		$scope.ticket.total = total
	}

	$scope.emitirTicket = function (){
		let productos = angular.copy($scope.productos)

		$scope.ticket.productos = productos
		$scope.ticket.emitido 	= true

		console.log("TICKET :: ", $scope.ticket)
	}

	$scope.backBalanza = function (){
		$scope.ticket.emitido 	= false
	}
}])
