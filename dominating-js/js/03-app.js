/**
 * Coercion
 * Es la conversion automatica o impcita de valores de un tipo dado a otro
*/

const number1 = 20;
const number2 = '40';

// Implicit Coercion
console.log('Implicit Coercion:', number1 + number2);

// Explicit Coercion: Aplica cuando utilizas una funcion para realizar su conversión.
console.log('Explicit Coercion:', Number(number2));

// Conversion to string with explicit coercion
console.log('Explicit Coercion in Number', number1.toString());

// Explicit Coercion in Array
const order = [1, 2, 3, 4];
console.log('Explicit Coercion in Array:', order.toString());
console.log(JSON.stringify(order));