/**
 * Scope
 * Tipos: Scope Global y Scope en una funcion o bloque de codigo.
 * El Scope es el alcance del valor de una variable.
*/

// Global
const client = 'Demo';

function showClient() {
    console.log('Scope Global:', client);
}

showClient();

// Local o Function

function showLocal() {
    const local = 'Local';
    console.log('Scope Local:', local);
}

showLocal();