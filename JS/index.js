var valorEmdolaTexto = prompt ("Qual o valor em dolar que voce quer converter?")

var valordolarEMnumero = parseFloat(valorEmdolaTexto)

var valorEMreal = valordolarEMnumero * 5.76
var valorRealFixado = valorEMreal.toFixed(2)

alert(valorRealFixado);