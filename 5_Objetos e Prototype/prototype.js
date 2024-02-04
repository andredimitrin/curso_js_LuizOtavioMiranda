//Construtora -> molde (classe)
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//instancia

const pessoa1 = new Pessoa('Luiz', 'Ota');// <- Pessoa = função construtora
const data = new Date();// <- Date = função construtora

console.dir(pessoa1)
console.dir(data)