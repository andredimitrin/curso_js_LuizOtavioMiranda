// //For in -> lê os indices ou chaves do objeto

// const frutas = ["banana", "maca", "laranja"];

// // for (let i = 0; i < frutas.length; i++) {
// //     console.log(frutas[i]);
// // }

// for(let i in frutas) {
//     console.log(frutas[i]);
// } 

// console.log("------------------");

// //For of -> lê os valores do array

// for(let fruta of frutas) {
//     console.log(fruta);
// }

// const pessoa = {
//     nome: "João",
//     sobrenome: "Silva",
//     idade: 30
// }

// for (let chave in pessoa) {
//     console.log(chave, pessoa[chave]);
// }

// const nomes = ["João", "Maria", "Pedro"];

// for (let valor of nomes){
//     console.log(valor);
// }

// console.log("------------------");

// for (let i in nomes){
//     console.log(nomes[i]);
// }

// console.log("------------------");

// nomes.forEach((valor, indice) => console.log(valor,indice));


const pessoas = {
    nome: "João",
    sobrenome: "Silva",
    idade: 30
};

const novasPessoas = [pessoas].map(pessoa => {
    return `Nova pessoa: ${pessoa.nome} ${pessoa.sobrenome}`;
});

console.log(novasPessoas);
