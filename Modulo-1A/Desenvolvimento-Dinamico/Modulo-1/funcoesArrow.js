//Arrow functions

// Exemplo basico de uma arrow function que soma dois numeros
let somar = (a,b) => {
    return a+b;
}

//Chamando a funcao e exibindo o resultado no console
console.log(somar(5,3));

// exemplo de arrow function com um unico parametro(nao precisa de parenteses)
let dobrar = n => n*2;

//chamando a funcao e mostrando o resultado
console.log(dobrar(5));

//Exemplo de arrow function usada como callback
let numeros = [1, 2, 3, 4, 5];

//Usando arrow Function com o metodo map para dobrar os valores do array
let numerosDobrados = numeros.map( n => n*2);

// exibindo o array resultante
console.log(numerosDobrados);

// Arrow function com  corpo de funcao mais complexo
let saudacao = (nome, idade) => {
    let mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
    return mensagem;
};

// chamando e mostrando o resultado
console.log(saudacao("Gael M.", 1.8));
