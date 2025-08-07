/**
 * Crear algoritmo que devuelva cantidad de
 * números positivos en un array.
 */
let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivo(arr) {
    let cantidad = 0;
    for(elemento of arr) {
        if (elemento > 0) {
            cantidad++;
            
        }
    }
    return cantidad;
}   
    

let resultado = cuantosPositivo(array);
console.log(resultado);