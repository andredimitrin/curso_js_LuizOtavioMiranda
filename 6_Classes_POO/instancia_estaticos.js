function teste(){
    console.log('Esse é meu teste.')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste()
    }

    aumentaVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático, não depende da instância
    // static trocarPilha() {
    //     console.log('Ok, vou trocar.');
    // }
}

const controle1 = new ControleRemoto('LG');
