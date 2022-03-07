/**
 * Self
 * 
 * Se refiere a la ventana global pero se utiliza mucho
 * en Service Workers y Web Workers.
*/

self.onload = () => {
    console.log('Self:', 'Window Ready!');
};

window.name = 'Monitor 20in';
const product = {
    price: 30,
    available: true,
    information() {
        const self = this;
        return `The product ${ self.name } costs ${ self.price }`
    }
};

console.log(product.information());