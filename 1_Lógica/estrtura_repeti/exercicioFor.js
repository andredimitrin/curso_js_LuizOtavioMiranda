const elementos = [
    { tag: 'p', texto: 'Qualquer texto pode ser colocado' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

// Verifica se o elemento com a classe "container" existe
const container = document.querySelector('.container');
const div = document.querySelector('div');

if (container) {
    for (let i = 0; i < elementos.length; i++) {    
        let { tag, texto } = elementos[i];
        let tagCriada = document.createElement(tag);
        let textoCriado = document.createTextNode(texto);
        tagCriada.appendChild(textoCriado);
        container.appendChild(tagCriada);        
    }
} else {
    console.error('Elemento com a classe "container" não encontrado.');
}
