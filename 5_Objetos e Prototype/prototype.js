//Construtora -> molde (classe)
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Original:' + this.nome + ' ' + this.sobrenome;
}

//prototype
//Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

//instancia

const pessoa1 = new Pessoa('Luiz', 'Ota'); // <- Pessoa = função construtora
const data = new Date();// <- Date = função construtora

console.log(pessoa1)
console.log(data)
