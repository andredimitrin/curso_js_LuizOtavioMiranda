function relogio () {
function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector(".relogio");
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

function pausaRelogio() {
    clearInterval(timer);
    relogio.classList.add('pausado');
}

function reiniciaRelogio() {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado');
    segundos = 0;
}

document.addEventListener('click', function (event) {
    const el = event.target;

    if (el.classList.contains('start')) {
        reiniciaRelogio();
        iniciaRelogio();
    }

    if (el.classList.contains('pause')) {
        pausaRelogio();
    }

    if (el.classList.contains('reset')) {
        reiniciaRelogio();
    }
});

}

relogio()