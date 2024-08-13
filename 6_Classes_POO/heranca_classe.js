class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado.`);
            return;
        }

        this.ligado = true;
        console.log(`${this.nome} foi ligado.`);
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado.`);
            return;
        }

        this.ligado = false;
        console.log(`${this.nome} foi desligado.`);
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome,temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Olha você alterou o metodo ligar')
    }

    falaOi(){
        console.log('Oi')
    }
} 

const s1 = new Smartphone('iPhone','Preto', 'XR');

console.log(s1)

const t1 = new Tablet('iPad',true);
console.log(t1)
t1.ligar();
t1.falaOi()