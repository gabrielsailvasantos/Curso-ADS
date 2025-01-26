// Definindo funcoes regulares com dois parametros
function soma(a,b){
    return a + b;
}

// chamando a funcao soma e armazenando o resultado em uma variavel
let resultado = soma(13, 29);

// exibindo o resultado da funcao soma
console.log("O resultado da soma é: " + resultado);
console.log("O resultado da soma é: " + soma(13, 29));

// Definindo uma função regular usando a palavra-chave function
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

// chamando a funcaosaudacao e passando um argumento
saudacao("Gael M.");

//Definindo uma funcao regular sem parametro e sem retorno
function mensagem() {
    console.log("Esta é uma mesnsagem de boas vindas!");
}

// chamando a funçao mensagem
mensagem();