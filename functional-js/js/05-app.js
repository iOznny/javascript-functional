const car = [
    { name: 'Monitor 20 Pulgadas', price: 500 },
    { name: 'Televisión 50 Pulgadas', price: 700 },
    { name: 'Tablet', price: 300 },
    { name: 'Audifonos', price: 200 },
    { name: 'Teclado', price: 50 },
    { name: 'Celular', price: 500 },
    { name: 'Bocinas', price: 300 },
    { name: 'Laptop', price: 800 }
];

// Names
const names = p => p.name;

const resultNAMES = car.map(names);
console.log(resultNAMES);

// Greater that 400
const greater = p => p.price > 400;

const resultHOF = car.filter(greater);
console.log(resultHOF);