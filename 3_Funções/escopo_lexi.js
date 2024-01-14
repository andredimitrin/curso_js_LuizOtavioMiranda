const nome = 'Luiz';

function falaNome() {   
    console.log(nome);
}

function usaFalaNome() {  
    const nome = 'Ota';  
    falaNome();
}

usaFalaNome();