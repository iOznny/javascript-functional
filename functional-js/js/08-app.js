/**
 * Closures: Permiten acceder a una funcion o valor desde el exterior
 * Tienen la propiedad de un Scope
*/

const client = 'Demo';

function showClient() { // scope start
    const client = 'Scope';
    console.log('Scope: ', client);
} // scope end

console.log(client);
showClient();

// Create example of closure
const getClient = () => {
    const name = 'Closure';

    function showName() {
        console.log('Closure: ', name);
    }

    return showName;
};

const clientClosure = getClient();
clientClosure();