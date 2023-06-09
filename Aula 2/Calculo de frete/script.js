var pesoProduto = Number(prompt("Digite o peso do produto"))
var distancia = Number(prompt("Digite a diantância do trajeto"))
const taxaQuilo = 0.5
const taxaDistancia = 0.1

var custoPeso = pesoProduto*taxaQuilo
var custoDistancia = distancia*taxaDistancia


var frete = custoPeso + custoDistancia

console.log("O custo total é " + frete + "reais")