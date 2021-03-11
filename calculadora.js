console.log("Calculadora ::")
const opArr = [
	{
		nombre: "Suma",
		valor: "suma"
	},
	{
		nombre: "Resta",
		valor: "resta"
	},
	{
		nombre: "Multiplicacion",
		valor: "multi"
	},
	{
		nombre: "Division",
		valor: "divi"
	}
]
const CalcService = {
	suma: function (a, b){
		return a + b
	},
	resta: function (a, b){
		return a - b
	},
	multi: function (a, b){
		return a * b
	},
	divi: function (a, b){
		if(b == 0){
			return 'Error!'
		}
		return a / b
	}
}