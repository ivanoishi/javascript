/**
 * @challenge: Algoritmo utilizando un Ciclo
 * Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
 * 
 * @version: v1.0.0
 * @author: Iván Oishi
 * @fecha: 28/11/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */

// Código
let textAll = prompt ("Escribe una palabra. ESC para detener: ");
while (textAll != "ESC") {
    alert ("Acabas de escribir: " + textAll);
    textAll = prompt ("Escribe otra palabra: ")
}