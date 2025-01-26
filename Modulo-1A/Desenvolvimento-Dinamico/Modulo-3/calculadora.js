// CALCULADORA EM JS

// FUNCAO QUE SIMULA AS OPERAÇOES DE UMA CALCULADORA
function calculadora(num1, num2){
    //operacoes aritimeticas basicas
    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;

    // incremento e decremento
    // incrementando o num1
    let incrementar = num1;
    incrementar++;

    //decrementando num2
    let decrementar = num2;
    decrementar--;

    //exibindo os resultados
    console.log(`adicao (${num1} + ${num2}) = ${adicao}`);
    console.log(`subtracao (${num1} - ${num2}) = ${subtracao}`);
    console.log(`multiplicacao (${num1} * ${num2}) = ${multiplicacao}`);
    console.log(`divisao (${num1} / ${num2}) = ${divisao}`);
    console.log(`modulo (${num1} % ${num2}) = ${modulo}`);
    console.log(`exponencial (${num1} ** ${num2}) = ${exponencial}`);
    console.log(`adicao(${num1}) ++ = ${incrementar}`);
    console.log(`adicao(${num1})-- = ${decrementar}`);
}

// executando a funcao
calculadora();
