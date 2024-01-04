// Argumentos que sustenta todos os argumentos enviados

// function funcao({nome, sobrenome, idade}) {

//     console.log(nome, sobrenome, idade);

// }

// funcao({nome: 'Luiz', sobrenome: 'Ota', idade: 30}); 

// function conta(operador, acumulador, ...numeros){

//     for (let numero of numeros) {
//         if(operador === '+'){
//             acumulador += numero
//         }else if(operador === '-'){
//             acumulador -= numero
//         } else if(operador === '*'){
//             acumulador *= numero
//         } else if(operador === '/'){
//             acumulador /= numero
//         }
        
//     }
//     console.log(acumulador)
// }

// conta('*', 200, 20, 30, 40, 50, 60);

const conta = (...args) => {
    console.log(args);
}

conta('+', 200, 20, 30, 40, 50, 60);