var salarioFuncionario = Number(prompt("Qual e o sálario do funcionario: "))

var impostoRenda = 0
var inss = 0

function calcularImpostoRenda (salarioFuncionario) {
    if(salarioFuncionario <= 1983.98){
        impostoRenda = 0
    } else if(salarioFuncionario <= 2826.65 ){
        impostoRenda = (salarioFuncionario*0.075) - 142.80
    } else if(salarioFuncionario <= 3751.05 ){
        impostoRenda = (salarioFuncionario*0.15) - 354.80
    } else if(salarioFuncionario <= 4664.68){
        impostoRenda = (salarioFuncionario*0.225) - 636.13
    } else {
        impostoRenda = (salarioFuncionario*0.275) - 869.36
    }
    return impostoRenda
}

function calcularInss (salarioFuncionario){
    
if (salarioFuncionario <= 1302) {
    inss = salarioFuncionario * 0.075 // 7.5%
    porcentagemInss =  "7%"
} else if (salarioFuncionario >= 1302.01 && salarioFuncionario <= 2571.29) {
    inss = salarioFuncionario * 0.09 // 9%
    porcentagemInss =  "9%"
} else if (salarioFuncionario >= 2571.30 && salarioFuncionario <= 3856.94) {
    inss = salarioFuncionario * 0.12 // 12%
    porcentagemInss =  "12%"
} else {
    inss = salarioFuncionario * 0.14 //14%
    porcentagemInss =  "14%"
}
return inss
}


function calculoSalarioLiquido (salarioFuncionario, impostoRenda, inss){
    var salarioLiquido = salarioFuncionario - impostoRenda - inss
    return salarioLiquido
}


alert(salarioLiquido)
var salarioFormatado = new Intl.NumberFormat('pt-BR', {style : "currency",
currency : "BRL"}).format(salarioLiquido)

console.log(calcularImpostoRenda(salarioFuncionario))
console.log(calcularInss(salarioFuncionario))