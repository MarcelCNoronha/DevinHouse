var valor1 = Number(prompt("Entre com o primeiro valor: "))
var valor2 = Number(prompt("Entre com o segundo valor: "))
var operacao = prompt(`
Escolha a operação que deseja realizar
(1) - SOMA (+)
(2) - SUBTRAÇÃO (-)
(3) - DIVISÃO (/)
(4) - MULTIPLICAÇÃO (*)
(3) - EXPONENCIAÇÃO (**)
(4) - RAIZ QUADRADA (1/2)

`)

switch(operacao){
    case "1": case "+": {
        console.log("O valor da soma: " + (valor1+valor2))
        break;
    }
    case "2": case "-": {
        console.log("O valor da subtração: " + (valor1-valor2))
        break;
    }
    case "3": case "/": {
        console.log("O valor da divisão: " + (valor1/valor2))
        break;
    }
    case "4": case "*": {
        console.log("O valor da multiplicação: " + (valor1*valor2))
        break;
    }
    case "5": case "**": {
        console.log("O valor da exponenciação: " + (valor1**valor2))
        break;
    }
    case "6": case "1/2": {
        console.log("O valor da raiz quadrada - Primeiro valor: " + (math.sqrt(valor1)) + ", Segundo valor: " + (math.sqrt(valor2)) )
        break;
    }
    default:
        {
            console.log("Operação inválida")
            break;
        }
}