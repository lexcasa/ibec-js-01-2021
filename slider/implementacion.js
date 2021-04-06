let sliders  = [
	// Slider 1
	{
		img: "https://la.network/wp-content/uploads/2018/07/BOSQUE-HERMOSO.jpg"
	},
	// 
	// Slider 2
	{
		img: "https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg"
	},
	//
	// Slider 3
	{
		img: "https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled.jpg"
	},
	// Slider 4
	{
		img: "https://www.landuum.com/wp-content/uploads/2019/03/cultura_paisajeiluminado_landuum5.jpg"
	},
]
let izBorde  = 0
let derBorde = sliders.length - 1
let pos 	 = 0

jQuery('img').attr('src', sliders[0].img)	
// selector.click(function) -> Es un evento
jQuery('#movDer').click( function () {


	// Ejecutamos el clic
	// Se va a mover a la derecha en funcion de la posicion actual
	let obj = movDer(pos)
	jQuery('img').attr('src', obj.img)

	// pos = 0
	// pos = 1
	if(pos == sliders.length - 1){
		// Cuando pos tiene la ultima posicion del array
		// lo llevo hasta el principio
		pos = 0
	} else {
		// Llega pos con un valor
		// E incremento +1
		pos++;

		// pos = 1
		// pos = 2
	}
})

jQuery('#movIzq').click( function () {

	// Ejecutamos el clic
	// Se va a mover a la derecha en funcion de la posicion actual
	let obj = movIzq(pos)
	jQuery('img').attr('src', obj.img)	

	if(pos == 0){
		// Cuando estoy llegando con pos al primer elemento del array
		// Entonces lo llevo hasta el final
		pos = sliders.length - 1
	} else {
		// Llega pos con un valor
		// y resto -1
		pos--;
	}
})

// Obtenemos el largo del slider 
// y creamos un template con el patron <a href="#"> i + 1 </a>
let tpl = ``
for (let i = 0; i < sliders.length; i++) {
	let indice = i + 1

	tpl += `
		<a href="#">${indice}</a>
	`
}

jQuery('#indices').html(tpl)

// Agregue el evento clic en TODOS los "a" del HTML 
jQuery('a').click( function () {
	// El usuario no va a interactuar con todos los "a" al mismo tiempo
	// Quiero obtener el texto solo del "a" que di clic y no otro
	let esteTexto = jQuery(this).text()
	let indice 	  = parseInt(esteTexto)

	let obj 	  = movTo(indice)
	jQuery('img').attr('src', obj.img)

	// Tenemos que actualizar la pos 
	// Por que tenemos que tomar en cuenta 
	// Que se puede utilizar las flechas de IZQ y DER
	pos = indice -1

	// El jQuery(this) hace referencia AL "a" QUE LE DI CLIC
	return false
})