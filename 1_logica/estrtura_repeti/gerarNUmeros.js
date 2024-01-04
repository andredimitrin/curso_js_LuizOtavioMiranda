function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

function gerarNumerosUnicos(qtd, min, max) {
    if (max - min + 1 < qtd) {
        console.error("Impossível gerar a quantidade desejada de números únicos no intervalo fornecido.");
        return;
    }

    const numerosGerados = [];

    while (numerosGerados.length < qtd) {
        let rand = random(min, max);

        // Verifica se o número já foi escolhido antes
        if (!numerosGerados.includes(rand)) {
            numerosGerados.push(rand);
        }
    }

    return numerosGerados;
}

const numerosUnicos = gerarNumerosUnicos(6, 1, 60);
console.log(numerosUnicos);
