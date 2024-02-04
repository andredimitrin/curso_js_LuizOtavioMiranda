// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave        
        configurable: true, // configuravel
        get : function() {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor inválido');
            } 
                        
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
console.log(p1.estoque);



