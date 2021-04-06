let movIzq 	 = function (position) {
	if(position < sliders.length){
		if(position == izBorde){
			return sliders[derBorde]
		} else {
			return sliders[position - 1]
		}
	}
}

let movDer 	 = function (position) {
	console.log("position: ", position)

	if(position < sliders.length){
		if(position == derBorde){
			return sliders[izBorde]
		} else {
			return sliders[position + 1]
		}
	}
}

let movTo = function (index){
	let position = index - 1
	return sliders[position]
}