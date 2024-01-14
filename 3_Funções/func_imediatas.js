// Funções auto-invocadas IIFE (Immediately Invoked Function Expression)

// function qualquerCoisa() {
//     console.log('Qualquer coisa');
// }

// qualquerCoisa();


// (function(){
//     const nome = 'Luiz';
//     console.log(nome);
// })();


// const nome = 'Carlos';

// console.log(nome);

(function(idade, peso, altura){
    const sobrenome = 'Ota';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(idade, peso, altura);
    
})(30,80,1.90);

const nome = 'Qualquer coisa';
