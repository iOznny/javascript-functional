// Functions such as arguments

const sum = (a, b) => a + b;
const multy = (a, b) => a * b;

const sumOrMulty = fn => fn(10, 20);

// Function como argumento
console.log('Suma como argumento: ', sumOrMulty( sum ));
console.log('Multiplicar como argumento: ', sumOrMulty( multy ));