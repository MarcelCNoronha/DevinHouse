// nao permite o uso de variaveis não declaradas com var, const ou let 
// "use strict";

console.log("m1s05a1");

const texto = "casa2";

console.log(texto);

// indice: index, idx, i
// inicializa um vetor
const vetor = ["Arroz", 34, "Feijão", 55, null];

// adiciona itens
vetor.push("batata");

// altera item
vetor[1] = "cenoura";
vetor[vetor.length] = "outracoisa";

// mostra todo vetor
console.log(vetor);

// informa o tamanho do vetor
console.log(vetor.length);

// consulta o ultimo elemento do array
console.log(vetor[vetor.length - 1]);
console.log(vetor.at(-1));

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// acessa o numero 5
console.log(matrix[1][1]);

// Exemplo objetos
// par chave-valor/key-value
// cria um objeto
const qqrnome = { bla: 33 };
console.log(qqrnome);

// acrescenta mais um par chave-valor
qqrnome.ble = 66;

// acessa o valor da chave bla
console.log(qqrnome.bla);

// exemplo estrutura de array com objetos
const listPessoas = [
  {
    id: 1,
    nome: "Romeu",
    profissao: "Programador",
  },
  {
    id: 2,
    nome: "Isaac",
    profissao: "Mentor",
  },
];

console.log(listPessoas[1].profissao);

// var possui escopo global

// let e const possui escopo de função
function texte(){
  var testeGlobal = "lelele";
  console.log(testeGlobal);
};
texte();


function texte(){
  let testeGlobal = "lelele";
};

texte();
// console.log(testeGlobal);


lelelel = 23
console.log(lelelel)


function calcula(a, b){
  console.log(a,b);
}

calcula(1,3);


// REST 
function calcula(a, b, ...resto){
  console.log(a, b, resto)
}

calcula(1,2,3,4,5,6)



// SPREAD espalhando os valores na função calcula

const exemploSpread = [4, 5, 6, 7, 9];

calcula(...exemploSpread);