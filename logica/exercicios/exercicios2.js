const ePaisagem = (altura, largura) => largura > altura;

const altura = 100;  
const largura = 50;  

let modo;

if (altura < largura) {
    modo = "paisagem";
} else {
    modo = "retrato";
}

console.log(`Está no modo ${modo}`);

