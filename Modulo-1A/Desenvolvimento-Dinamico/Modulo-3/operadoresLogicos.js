// Exemplos de operadores logicos

// Operador E (&&)
const a = true;
const b = false;

const resultadoE1 = a && b; // false
const resultadoE2 = a && true; //true

console.log(`true && false: ${resultadoE1}`); // saida: false
console.log(`true && true: ${resultadoE2}`); // saida: true

// operador OU (||)
const resultadoOU1 = a || b; // true
const resultadoOU2 = a || false;

console.log(`true || false: ${resultadoOU1}`); // saida: true
console.log(`false || false: ${resultadoOU2}`);

// operador Não (!)
const resultadoNao1 = !a;
const resultadoNao2 = !b;

console.log(`!true: ${resultadoNao1}`);
console.log9(`!false: ${resultadoNao2}`);

