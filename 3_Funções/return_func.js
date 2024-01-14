// return
// Retorna um valor
// Termina a função

// function soma(a,b){
//     return a + b
// }

// function soma2(a,b){
//     console.log(a + b)
// }

// soma2(5,5 )

// function criaPessoa(nome, sobrenome){
//     return { nome, sobrenome };
        
// }

// const p1 = criaPessoa('Luiz', 'Ota');
// const p2 = {
//     nome: 'João',
//     sobrenome: 'Silva'
// };

// console.log(typeof p1, typeof p2)

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('Ola');
// console.log(olaMundo('mundo!'))

// function duplica(n){
//     return n * 2;
// }
// function triplica(n){
//     return n * 3;
// }
// function quadriplica(n){
//     return n * 4;
// }

// console.log(duplica(5))
// console.log(triplica(5))
// console.log(quadriplica(5))
// console.log(duplica (triplica(quadriplica(5))))


function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }    
}  

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log(duplica(5))
console.log(triplica(5))
console.log(quadriplica(5))