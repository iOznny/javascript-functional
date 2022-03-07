/**
 * Explicit Binding 
 * 
 * Diferencias entre Métodos de EB:
 * 1. Call:
 *  No puede leer los elementos de un arreglo de forma individual.
 * 
 * 2. Apply:
 *  Puede recibir arreglos y leer los elementos de forma individual.
 * 
 * 3. Bind:
 *  Recibe los elementos de forma individual pero te crea una nueva funcion.
 * 
*/

function person(item1, item2) {
    console.log(`Name: ${ this.name }, escucho ${ item1 } y ${ item2 }`);
}

const information = {
    name: 'Demo'
};

const music = ['Metal', 'Reggeton'];
person.call(information, music[0], music[1]);
person.apply(information, music);
const newFN = person.bind(information, music[0], music[1]);
newFN();