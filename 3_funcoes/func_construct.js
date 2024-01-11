//função construtora -> objeto
//função fabrica -> objeto
//Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    const ID = 123456789;
    const metodoInterno = function() {
        
    };

    const metodoInterno = function() {
        
    }


    //Atributos ou metodos publicos 
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ' ' + this.sobrenome);
    };
}

const p1 = new Pessoa('Luiz', 'Ota');
const p2 = new Pessoa('João', 'Silva');
p2.metodo();

console.log(p2.nome);