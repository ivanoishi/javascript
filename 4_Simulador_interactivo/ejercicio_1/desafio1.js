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
 */

// Código
/* let primerNumero = parseInt (prompt("Cuanto es el monto a pagar?"));
let segundoNumero = parseInt (prompt("En cuantas cuotas?")); */
let resultado;
function dividir (primerNumero, segundoNumero) {
     resultado = primerNumero / segundoNumero;
    
}
dividir (parseInt (prompt("Cuanto es el monto a pagar?")), parseInt (prompt("En cuantas cuotas?")));
alert ("Tenes que pagar $" + resultado + " por mes ");