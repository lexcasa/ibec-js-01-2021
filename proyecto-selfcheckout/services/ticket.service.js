app.factory('TicketService', ['$http', function ($http) {
	let model = 'tickets'
	let url   = API + model

	const Ticket = {
		listado: function (cb){
			$http.get(url).then( function (res){
				cb({response: res.data})
			}, function (error){
				cb({error: 'Error de comunicacion con la API'})
			})
		},
		emitir: function (ticket, cb){
			ticket.emitido = true
			$http.post(url, ticket).then( function (res){
				cb({emitido: true, emitiendo: false})
			}, function (error){
				cb({error: 'Error de comunicacion con la API'})
			})
		},
		eliminar: function (id, cb){
			let newUrl = url + '/' + id
			$http.delete(newUrl).then( function (res){
				cb({response: 'Ticket eliminado correctamente.'})
			}, function (error){
				cb({error: 'Error de comunicacion con la API.'})
			})
		}
	}
	return Ticket;
}])