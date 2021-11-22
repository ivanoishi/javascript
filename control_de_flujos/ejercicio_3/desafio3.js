/**
 * @challenge: Algoritmo con un Condicional
 * 
 * @version: v1.0.0
 * @author: Iván Oishi
 * @fecha: 22/11/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */

// Código
let numer = prompt("Dame un numero del 0 al 100:");
if (numer < 10){
    alert("Perdiste con tu numero:" + " " + numer);
}else if (numer <= 50){
    alert("Ganaste con tu numero:" + " " + numer);
}else if (numer >= 51){
    alert("Perdiste con tu numero:" + " " + numer);
}else {
    alert("Pusiste cualquier cosa");
}
 