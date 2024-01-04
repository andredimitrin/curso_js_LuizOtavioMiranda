//Declaração de função (Function Hoisting)
falaOi();
function falaOi() {
    console.log('Oi');}

//First Class Objects (Objetos de primeira classe)
//Function expression

const souUmDado = function () {
    console.log('Sou um dado');
}

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

//Arrow Functions

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();

//IIFE -> Immediately Invoked Function Expression

(function(){
    console.log('Sou uma IIFE');
})

//Dentro de um objeto

const obj = {
    falar() {
        console.log('Estou falando');
    }
};

obj.falar();