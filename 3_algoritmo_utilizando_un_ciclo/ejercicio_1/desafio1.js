/**
 * @challenge: Algoritmo utilizando un Ciclo
 * Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
 * 
 * @version: v1.0.0
 * @author: Iván Oishi
 * @fecha: 28/11/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */

// Código
let numbers = parseInt(prompt("Dame un numero para sumar: "));
let condition = parseInt(numbers*2 );
for (let y = numbers; y <= condition ; y++) {
    console.log (y);
}