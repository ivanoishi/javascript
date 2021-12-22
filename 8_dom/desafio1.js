/**
 * @challenge:  Incorporar DOM
 * 
 * 
 * @version: v1.0.0
 * @author: Iván Oishi
 * @fecha: 21/12/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 *  
 */

// Código

const oldPhones = [
     {mark: "Apple", model: "iPhone 12 Pro Max"},
     {mark: "Apple", model: "iPhone 12 Pro"},
     {mark: "Samsung", model: "Galaxy s21"},
     {mark: "Samsung", model: "Galaxy s20"},
     {mark: "Motorola", model: "20 Pro"},
     {mark: "Motorola", model: "E7"},
];
let listFinal;

class ListPhone {
     constructor(mark, model){
          this.mark = mark;
          this.model = model;
     }
     comprar (){
          console.log(`Acabamos de insertar al mercado el ${this.model} de la marca ${this.mark}`)
     }
}

const lastPhone = [
     new ListPhone ("Apple", "iPhone 13 Pro Max"),
     new ListPhone ("Apple", "iPhone 13 Pro"),
]

console.log(oldPhones)

for (const oldPhones of lastPhone){
     oldPhones.comprar();
}

listFinal = oldPhones.concat(lastPhone);
console.log(listFinal)
