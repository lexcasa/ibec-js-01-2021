app.controller('SelfCheckoutCtrl', ['$scope','ProductoService','TicketService', function ($scope, ProductoService, TicketService) {
	console.log("SelfCheckoutCtrl :: ")

	$scope.q = {qProducto: "", peso: 0, emitiendoTicket: false, historico: false}

	$scope.baseProductos = []
	$scope.historicoTickets = []

	$scope.productos = []
	$scope.pesos 	 = []

	$scope.ticket 	 = {
		total: 0,
		emitido: false,
		productos: []
	}

	let initData = function (){
		// Obtenemos el listado de productos de la base local
		ProductoService.listado( function (res){
			if(!res.error){
				$scope.baseProductos = res.response
			} else {
				alert(res.error)
			}
		})

		// Obtengo el listado de ticket del servicio
		TicketService.listado( function (res){
			if(!res.error){
				$scope.historicoTickets = res.response
			} else {
				alert(res.error)
			}
		})
	}
	
	initData()

	$scope.buscaProducto = function (){
		ProductoService.buscarProducto( 
			$scope.baseProductos, 
			$scope.productos, 
			$scope.pesos, 
			$scope.q.qProducto, 
			function (newProducto){
				$scope.productos = newProducto
		})
	}

	$scope.pesarProductos = function (){

		ProductoService.pesarProductos(
			$scope.q.peso, 
			$scope.pesos, 
			$scope.productos, 
			function (newPesos){
				$scope.pesos = newPesos
				$scope.calcTotal()
			})
	}

	$scope.calcTotal = function (){
		ProductoService.total( $scope.productos, function (total){
			$scope.ticket.total = total
		})
	}

	$scope.emitirTicket = function (){
		let productos = angular.copy($scope.productos)

		// Acciones de la UI
		$scope.q.emitiendoTicket = true
		$scope.ticket.productos = productos

		
		let ticket 	  = angular.copy($scope.ticket)

		// Engancho los productos al ticket
		ticket.productos = productos

		TicketService.emitir( ticket, function (res){
			if(!res.error){
				$scope.ticket.emitido 	 = res.emitido
				$scope.q.emitiendoTicket = res.emitiendo
			}
		})

		console.log("TICKET :: ", $scope.ticket)
	}

	$scope.backBalanza = function (){
		$scope.ticket 	 = {
			total: 0,
			emitido: false,
			productos: []
		}

		$scope.productos = []
		$scope.pesos 	 = []

		$scope.q = {qProducto: "", peso: 0, emitiendoTicket: false, historico: false}
		initData()
	}

	$scope.showHistorial = function (){
		$scope.q.historico = !$scope.q.historico
	}

	$scope.verTicket = function (ticket){
		$scope.ticket = ticket
	}
	$scope.eliminarTicket = function (id){
		if(confirm("Esta seguro que quiere eliminar este ticket?")){
			// disparo el servicio
			TicketService.eliminar(id, function (res){
				if(!res.error){
					// Recargo el historial
					initData()

					// Devuelvo el alerta de que esta todo OK
					alert(res.response)
				} else {
					alert(res.error)
				}
			})
		}
	}
}])
