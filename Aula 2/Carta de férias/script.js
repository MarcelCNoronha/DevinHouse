var nomeFuncionario = prompt("Digite o nome do funcionário")
var dataInicio = prompt("Digite a data de início das férias")
var dataFim = prompt("Digite a data de fim das férias")
var dataAtual = new Date().toLocaleDateString()

var cartaFerias = `Caro(a) Responsável,
Gostaria de solicitar minhas férias conforme as informações abaixo:

Nome do Funcionário: ${nomeFuncionario}
Data de Início: ${dataInicio}
Data de Término: ${dataFim}

Agradeço antecipadamente pela atenção e aguardo a confirmação do meu pedido

Atenciosamente,
${nomeFuncionario}
Data do Pedido: ${dataAtual}`

alert(cartaFerias)
console.log(cartaFerias)

