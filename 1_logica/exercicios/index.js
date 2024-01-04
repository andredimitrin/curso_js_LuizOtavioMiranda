// Selecionar o contêiner de parágrafos
const paragrafos = document.querySelector('.paragrafos');

// Selecionar todos os parágrafos dentro do contêiner
const ps = paragrafos.querySelectorAll('p');

// Iterar sobre cada parágrafo e exibir no console
for (let p of ps) {
    console.log(p);
}

// Definir a cor do texto para todos os parágrafos
for (let p of ps) {
    p.style.color = 'red';
}
