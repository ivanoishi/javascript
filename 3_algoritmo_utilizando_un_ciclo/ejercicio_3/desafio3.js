/**
 * @challenge: Algoritmo utilizando un Ciclo
 * Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
 * 
 * @version: v1.0.0
 * @author: Iván Oishi
 * @fecha: 28/11/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */

// Código
let rpt = parseInt(prompt("Pon un numero y se repetirá el Hola: "));
for (let index = 1; index <= rpt; index++) { 
    console.log(index + " Hola")
    
}


