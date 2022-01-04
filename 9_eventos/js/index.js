/**
 * @challenge:  Incorporar Eventos
 * 
 * 
 * @version: v1.0.0
 * @author: Iván Oishi
 * @fecha: 24/12/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 *  
 */

// Código
let miFormulario = document.getElementById("form1");
let result = document.getElementById("result");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){ 
    e.preventDefault();
    let userName = document.getElementById("userName").value; 
    let userSurname = document.getElementById("userSurname").value; 
    let userAge = document.getElementById("userAge").value;
   
    if( userName.length < 2 ){
        result.textContent = `El nombre debe ser mayor a 2 letras`
    }else if(userSurname.length < 2){
        result.textContent = `El Apellido debe ser mayor a 2 letras`
    }else{
        result.textContent = `Hola ${userName} ${userSurname} tu edad es de ${userAge}`
    }
}
