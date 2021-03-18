let sliders  = [15, 2, 11]
let izBorde  = 0
let derBorde = sliders.length - 1
let pos 	 = 0

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
	if(position < sliders.length){
		if(position == derBorde){
			return sliders[izBorde]
		} else {
			return sliders[position + 1]
		}
	}
}
