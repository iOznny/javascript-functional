// Higher Order Functions: Retornan una funcion como argumento

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

// Without Higher Order Functions
const result = car.filter(item => {
    return item.price > 400;
});

console.log(result);


// With Higher Order Functions
const greater = product => {
    return product.price > 400;
}

const resultHOF = car.filter(greater);
console.log(resultHOF);