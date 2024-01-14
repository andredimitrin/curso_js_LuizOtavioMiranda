// function soma(x,y){
//     if (typeof x !== 'number' || typeof y !== 'number'){
//         throw new Error ('x e y precisam ser do tipo number')
//     }
//     return x + y
// }




// try{
//     console.log(soma(1,2));
//     console.log(soma(1,'2'));
// }catch(error){
//     console.log('Algo mais amigavel');
// }

// try{
//     // É executada quando não há erros
// } catch(e){
//     // É executada quando houver erros
// } finally{
//     // É executada sempre
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new Error('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });


}

try {

    const data = new Date('01-01-1970 12:58:12');

    const hora = retornaHora(11);
    console.log(hora);

} catch (e) {

} finally {
    console.log('Tenha um bom dia');
}