// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio',
// };

// const chave = 'nome'

// console.log(pessoa[chave])


//Array

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 37;
// pessoa1.falarNome = function () {
//     return (`${this.nome} ${this.sobrenome} esta falando seu nome`)
// }

// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade
//     return;
// }


// for (let chave in pessoa1){
//     console.log(pessoa1[chave])
// }

// Factory function (Função fábrica)
// Constructor function (Função construtora)
//Classes

// function criaPessoa(nome,sobrenome){
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('Luiz','Otávio')
// console.log(p1.nomeCompleto)


function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this);
}

// New cria um objeto vazio  {} <- this 
//p1 = (enderecomemoria ) -> 'Valor
//p1.enderecomemoria ={nome: 'Outra coisa}
//p1 = (novoenderecomemoria... )

const p1 = new Pessoa('Luiz', 'Otávio');
p1.nome = 'Outra coisa';

const p2 = new Pessoa('João', 'Silva');

console.log(p1, p2)