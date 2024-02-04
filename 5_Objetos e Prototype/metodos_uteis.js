/*
Object.value
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(obj, 'prop')
...(spread)

//Já visto
Object.keys(obj)
Object.freeze(obj)
Object.defineProperties(obj, prop)
Object.defineProperty(obj, 'prop', prop)

*/

// const produto = {
//     nome: 'Produto',
//     preco: 1.90,
// }
// const caneca = {
//     ...produtos,
//     material: 'porcelana',
//     estoque: 100
// }
// const caneca = Object.assign({}, produto, { material: 'porcelana', estoque: 100 });
// const caneca = 

// caneca.nome = 'Outro nome';
// caneca.preco = 2.90

// console.log(caneca)
// console.log(produto)


// const produto = {
//     nome: 'Produto',
//     preco: 1.8
// };
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Outro nome',
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.nome = 'Outra coisa';
// console.log(produto);

const produto = {
    nome: 'Produto',
    preco: 1.8,
    material: 'porcelana',
}

// console.log(Object.values(produto));
// console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}