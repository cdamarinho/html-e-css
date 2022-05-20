// Executa o script no cabeçalho do HTML
document.write("<h1>Estamos executando o script.js</h1>");
document.write("Esse script está em um arquivo externo e é referenciado no header do HTML");

// Envia os dados ao console do navegador
console.log("Esse script está no cabeçalho do HTML");
console.log("Primeiro");
console.log("Segundo");




// Tipagem fraca
var teste = 1;
document.write("<hr>O valor da variável teste é " + teste + "<hr>");
teste = 'joao';
document.write("O valor da variável teste agora é " + teste + "<hr>");

// Variável global, criada sem declaração
nome = 'joao';
console.log(nome)

// Formas de declaração das variáveis
var   v1 = 5.25;
let   v2 = null; 
const v3 = 'teste'

console.log(typeof(v1));
console.log(typeof(v2));
console.log(typeof(v3));
console.log(typeof NaN); // tipo number
console.log(typeof +Infinity); // tipo number
console.log(typeof null); // tipo number
const number = "1";
// Operadores das comparação
console.log(number == 1);
// True
console.log(number === 1);
// False

console.log('ele disse "vtnc"');

// adiciona uma lista no body do HTML
var lista = ['Arroz', 'Feijão', 'carne','macarrão'];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

console.log(listaUl);
console.log(body);

//alert("Vamos criar uma lista aqui!");

body[0].appendChild(listaUl);
// incrementa a lista utilizando laço de repetição com tamanho dinâmico
for(var  i=0;i<lista.length;i++) {
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUl.appendChild(liFor);
}

document.write("A lista não ordenada <b>ACIMA</b> foi criada dinamicamente via JavaScript");

// cria objetos com com atributos
var obj = {
    nome: "Joao",
    sobrenome: "Furtado",
    profissao: "jogador",
    salario: 120000,
    pessoaJuridica: true
};
//inicia objetos
console.log(obj);
 
//define atributo dos objetos
console.log("Salario: R$" + obj.salario);

// cria lista com diversos tipos
var arr = [5, "JP", true, {teste1: 1, teste2: 2}, false];
// exibe array 
console.log(arr);

//exibe conteúdo de acordo com índice do array
console.log(arr[1]);

//exibe tipo da variável
console.log(typeof arr);

// testando para ver se o array tem item no indice 4
if(arr[4]) {
    console.log("Entrou no teste do IF")
}

// Operadores de comparação ==, ===, !=, >, <, >=, <= 
if (obj.salario > '100000') {
    console.log("Salário acima de 100 mil");
}
