/**
 * Currying: Permite dividir una funcion en más de un 
 * parametro en argumentos de forma parcial.
 * 
 * Partials: Se podria manejar como el numero de partes
 * a dividir el Currying.
*/

// Currying with two Partials
const sum = (a, b, c) => a + b + c;

const partial = a => (b, c) => sum(a, b, c);
const firstNumber = partial(5);
const result = firstNumber(4, 3);

console.log('Currying 2Parts:', result);

// Currying with three Partials
const partialTwo = a => b => c => sum(a, b, c);
const oneNb = partialTwo(5);
const twoNb = oneNb(5);
const resultP3 = twoNb(5);
console.log('Currying 3Parts: ', resultP3);

// Currying with three Partials
const partialSimplified = a => b => c => sum(a, b, c);
const partialSimplifiedResult = partialSimplified(5)(5)(5);
console.log('Currying 3Parts Simplified: ', partialSimplifiedResult);