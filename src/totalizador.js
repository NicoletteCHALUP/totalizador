/*function totalizador(a) { 
 return a
}*/

function totalizador(cantidad, precio) {
    return cantidad * precio;
  }
  
  export function calcularImpuesto(precio, impuestoPorcentaje) {
    return precio * (1 + impuestoPorcentaje / 100);
  }
  
  export default totalizador;calcularImpuesto;