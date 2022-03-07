/**
 * Hoisting
 * Permite referir los contextos de ejecucion en JS
 * Dos fases: Creacion y de Ejecución
*/

client('Demo');
function client(name) {
    console.log(`Nombre: ${ name }`);
}

const client2 = function(name) {
    console.log(`Nombre: ${ name }`);
}
client2('Demo');