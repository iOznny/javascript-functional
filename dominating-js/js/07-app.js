/**
 *  Event Loop (Modelo de concurrencia y loop de eventos)
 * 
 *  Como se ejecuta el codigo en JS, dependiendo de tu prioridad.
*/

console.log('First');

setTimeout(() => {
    console.log('Second');
}, 0);

console.log('Third');

setTimeout(() => {    
    console.log('Fourth');
}, 0);

new Promise(function(resolve) {    
    resolve('Desconodido...');
}).then(console.log);

console.log('Latest');