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

  export function aplicarDescuento(cantidadItems) {
    let descuentoPorcentaje = 0;
    if (cantidadItems >= 7000) {
        descuentoPorcentaje = 7;
      }else if (cantidadItems >= 3000) {
        descuentoPorcentaje = 5;
      }else if (cantidadItems >= 1000) {
        descuentoPorcentaje = 3;
      }
    return descuentoPorcentaje;
  }