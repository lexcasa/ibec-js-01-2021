let a1 = document.querySelector("#a1")
let a2 = document.querySelector("#a2")
let op = document.querySelector("select")
let resultado = document.querySelector("p")

// Cargar el array de elementos en el HTML
let options = ``

// ${option} - Variable interpolable
for (var i = opArr.length - 1; i >= 0; i--) {
	let option = opArr[i]
	options +=  `
		<option value="${option.valor}">${option.nombre}</option>
	`
}
op.innerHTML = options

let calcular = function () {
	let num1 = 0
	let num2 = 0
	let operacion = op.value
	let res  = 0

	if(a1.value){
		num1 = parseFloat(a1.value)
	}

	if(a2.value){
		num2 = parseFloat(a2.value)
	}

	try	{
		res = CalcService[operacion](num1, num2)
	} catch(e){
		console.log("e: ", e)
	}
	
	resultado.innerText = res
	console.log("Correr calcular :: ", res)
}