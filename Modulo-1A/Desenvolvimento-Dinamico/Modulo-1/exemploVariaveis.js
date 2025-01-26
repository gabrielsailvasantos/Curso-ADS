// Exemplo de uso de var let e const em JS

const externo = "Olá eu sou uma constante global";

// Declaração de variavel usanto var

function exemploVar(){
    if (true){
        var mensagem = "Olá Faculdade Descomplica! Eu sou uma var...";
    }
    console.log(mensagem);
}

// Chamando a função exemploVar

exemploVar();

// Exemplo de erro e correção

var mensagem = "Olá faculdade Descomplica! Escopo externo!"; // caso eu oculte essa var ela nao sera executada
console.log(mensagem);

// Declaração de uma variavel usando let

function exemploLet() {
    if(true){
        let mensagem = "Olá Faculdade Descomplica! Eu sou uma let..."
    }
    console.log(mensagem);
    
}

// Chamando a função exemploLet
exemploLet();

// Exemplo de erro e correção
let mensagem = "olá Desscomplica! Let externo!!!";
console.log(mensagem);

// Declaração de uma constante usando const
function exemploConstante() {
    const mensagem = "Olá Descomplica! Eu sou uma constante!!!";
    console.log(mensagem);
}

// chamando a função exemploConst
exemploConstante();

// exemplo externo de const