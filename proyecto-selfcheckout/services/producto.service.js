app.factory('ProductoService', ['$http', function ($http) {
	let model = './model/productos.json'
	const Producto = {
		listado: function (cb){
			$http.get(model).then( function (res){
				cb({response: res.data})
			}, function (error){
				cb({error: 'Error de comunicacion con la API'})
			})
		},
		buscarProducto: function (baseProductos, productos, pesos, cod, cb){

			let newProductos = angular.copy(productos)

			if(productos.length === pesos.length){
				baseProductos.map( function (producto){
					if(producto.cod == cod){
						// Si encuentro el producto lo agrego 
						// a la lista de productos
						newProductos.push( angular.copy(producto) )
					}
				})
			}
			cb(newProductos)
		},
		total: function (productos, cb){
			let total = 0

			productos.map( function (producto){
				total += producto.precio
			})

			cb(total)
		},
		pesarProductos: function (qPeso, pesos, productos, cb){
			let peso = undefined
			
			if(qPeso > 0){
				peso = {
					medida: angular.copy(qPeso),
					verifica: false
				}
			}

			// Asumo que lo que voy a pesar se corresponde con el ultimo elemento de la lista
			let lastIndex = productos.length - 1

			if(peso && productos[lastIndex].peso == peso.medida){
				peso.verifica = true
			}

			if(peso){
				pesos.push( peso )
			}
			// Array de pesos
			cb(pesos)
		}
	}
	return Producto;
}])