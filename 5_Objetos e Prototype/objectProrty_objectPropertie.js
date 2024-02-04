// defineProperty - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        value: estoque, // valor da chave
        writable: true, // pode alterar o valor
        configurable: true // configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}


