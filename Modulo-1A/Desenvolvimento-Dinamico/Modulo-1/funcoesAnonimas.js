// Declaracao  de uma variavel chamada resultado e atribuicao de uma funcao anonima a ela

let somarParametros = function(parametro1, parametro2){
    console.log("Parametro 1: " + parametro1);
    console.log("Parametro 2: " + parametro2);

    let resultado = parametro1 + parametro2;

    console.log("Resultado " + resultado);

    return resultado;
}

//Chamada da funçao anonima atraves da variavel
let resultado = somarParametros(5, 10);
console.log("Resultado da chamada da funcao somaParametross: " + resultado);

// Definindo funçao que chama outra funcao
function executarFuncao(funcao, valor1, valor2){
    console.log("\nExecutando a funcao passada como argumento: ");
    return funcao(valor1, valor2);
}

// passando a funcao anonima como argumento para outra funcao
let resultadoExecucao = executarFuncao(somarParametros, 7, 3);
console.log("Resultado da execucao da funcao passada como argumento>: " + resultadoExecucao);


// Definindo e chamando uma funcao anonima no modod imediato
let resultadoImediato = (function(a, b){
    console.log("\nFuncao dechamada imediata: ");
    return a*b;
})(4, 6);

console.log("Resultado da funcao anonima chamada imediatamente: " +resultadoImediato);
