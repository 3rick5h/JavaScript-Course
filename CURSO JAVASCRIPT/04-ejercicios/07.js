/**
 * crear algoritmo que devuelva 
 * el precio del producto
 * más impuesto.
 */

function precioCompleto(precio, impuesto) {
    let tasa = precio * impuesto;
    let total = precio + tasa;
    return total
}

let resultado = precioCompleto(19.90, 0.15)
console.log(resultado)