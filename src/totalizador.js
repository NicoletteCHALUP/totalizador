/*function totalizador(a) { 
 return a
}*/

export function totalizador(cantidad, precio) {
    return cantidad * precio;
  }
  
  export function calcularImpuesto(precio, impuestoPorcentaje) {
    const impuesto = precio * (impuestoPorcentaje / 100);
    const precioTotal = precio + impuesto;
    return precioTotal.toFixed(2);
  }