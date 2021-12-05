/**
 * @challenge: Simulador interactivo
 * Calcular pagos en cuotas sobre un monto determinado.
 * 
 * @version: v1.0.0
 * @author: Iván Oishi
 * @fecha: 2/12/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 *  - v1.0.1 - Modificacion para saber en cuantas cuotas tiene que pagar
 */

// Código
let primerNumero = parseInt (prompt("Cuanto es el monto a pagar?"));
let segundoNumero = parseInt (prompt("En cuantas cuotas?"));
let resultado = 0;

function dividir (primerNumero, segundoNumero) {
     resultado = primerNumero / segundoNumero;
}

function mostrar (mensaje) {
     alert (mensaje);
}
dividir (primerNumero, segundoNumero);
mostrar ('Tenes que pagar $' + resultado + ' en ' + segundoNumero + ' cuotas por mes');

