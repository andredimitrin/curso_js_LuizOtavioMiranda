// const nomes = ['João', 'Maria', 'Antônio', 'Margarida', 'Joaquim'];

//nomes.splice(indice,delete,elem1,elem2,elem3);
//pop


// const removidos = nomes.splice(3,1,'Luiz' );
// console.log(nomes,removidos)


// const removidos = nomes.splice(3,1);

//shift

// const removidos = nomes.splice(0,1);

// console.log(nomes,removidos)

const nomes = ['João', 'Maria', 'Antônio', 'Margarida', 'Joaquim'];

//Push
nomes.splice(nomes.length, 0, 'Luiz');

console.log(nomes)