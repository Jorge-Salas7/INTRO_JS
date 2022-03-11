const arr1=new Array(3);
const arr2=new Array(1, 2, 3, 4);
const arr3=[1, 2, 3, 4];

console.log(arr1);
console.log(arr2);
console.log(arr3);


/*Arreglo mixto*/
const arrMixto=["Jorge", 20, true, () => console.log("Hola"), "Salas"];
console.log(arrMixto);

arrMixto.length; /*Saber el tamaño del arreglo*/


let alumnos=("Sergio", "Jorge", "Paola", "Santiago", "Luis");

alumnos.push("Jaime", "Gustavo"); /*Agrega lo que pongas al arreglo */

alumnos.pop(); /*Elimina lo ultimo del arreglo */

alumnos.unshift("Homero", "Octavio");

const eliminaElemento=shift(); /*Elimina lo primero del arreglo */

alumnos.concat("Jesus", "Rodrigo"); /*Agrega*/