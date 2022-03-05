/**
 * Pure Functions
 * Son funciones que retornan un dato sin modificar el valor de las variables
 * No modifican el valor original si no que retornan un dato nuevo
*/

const numberOne = 20;
const duplicate = number => number * 2;

const result = duplicate(numberOne);
console.log('Pure Function: ', result);
