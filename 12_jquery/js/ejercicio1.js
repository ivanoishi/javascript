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
  let total = 0; // acumulador
// Array de objetos para agregar información al DOM.
const productos = [
{  id: 1,  nombre: "iPhone 13", precio: 200000 },
{  id: 2,  nombre: "iPhone 12", precio: 150000 },
{  id: 3,  nombre: "iPhone 11", precio: 100000 }
];
// Recorremos el array con for..of
  for (const producto of productos) {
      //Por cada producto además de los datos agregamos un botón 
      $("#app").append(`
                            <div class="card" style="width: 18rem;">
                            <img src="./img/iphone-13.jfif" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">$${producto.precio}</p>
                            <a href="#" id="btn${producto.id}" class="btn btn-primary center">Comprar</a>
                            </div>`);
      //Asociamos el evento a botón recién creado.
      $(`#btn${producto.id}`).on('click', function () {
          console.log(`Compraste ${producto.nombre}`);
          arreglo.push(producto.nombre); // agregamos productos
          //total = total + producto.precio;
          total += producto.precio; // sumamos al total
          $('#shopping').html(`Compraste ${arreglo}`);
          $('#total').html('<b>Total a Pagar: </b>' + total)
      });
  }
  
  });