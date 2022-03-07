/**
 * New Binding
*/

function Vehicle(model, color) {
    this.model = model;
    this.color = color;
}

const vehicle = new Vehicle('Tesla', 'White');
console.log(vehicle);

// Window Binding: Asignar una variable a la ventana global.
window.color = 'Dark';
function hello() {
    console.log('Window Binding:', color);
}

hello();