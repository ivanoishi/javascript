/**
 * @challenge: Jquery
 * 
 * 
 * @version: v1.0.0
 * @author: Iván Oishi
 * @fecha: 9/02/2022
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */

// Código
$(function () {
  let arreglo = [];
  let total = 0;

const productos = [
{  id: 1,  nombre: "iPhone 13", precio: 200000 },
{  id: 2,  nombre: "iPhone 12", precio: 150000 },
{  id: 3,  nombre: "iPhone 11", precio: 100000 }
];

for (const producto of productos) {
      
    $("#app").append(`
                          <div class="card" style="width: 18rem;">
                          <img src="./img/iphone-13.jfif" class="card-img-top" alt="...">
                          <div class="card-body">
                          <h5 class="card-title">${producto.nombre}</h5>
                          <p class="card-text">$${producto.precio}</p>
                          <a href="#" id="btn${producto.id}" class="btn btn-primary center">Comprar</a>
                          </div>`);
      
    $(`#btn${producto.id}`).on('click', function () {
        console.log(`Compraste ${producto.nombre}`);
        arreglo.push(producto.nombre); 
        total += producto.precio; 
        $('#shopping').html(`Compraste ${arreglo}`);
        $('#total').html('<b>Total a Pagar: $</b>' + total)
    });
}  
});


$(function () {

$("#slide_1").prepend('<button id="btn1" class="btn btn-primary form-control">Mostrar</button>');
$("#slide_1").prepend(`<div id="div1" style="height: 120px; display:none; text-align:center">
                        <h3>¡Hola TecnoFanatico!</h3>
                        <h4>Compra un iPhone</h4>
                    </div>`);
$("#btn1").click(() => { 
    $("#div1").slideDown("slow");
});

});
  