const pessoa = {

    nome: 'Luiz',
    sobrenome: 'Ota',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

//Atribuição via desestruração de objetos
const{
    endereco: {rua: r = 12345, numero},
    endereco
} = pessoa;

console.log(r, numero, endereco)