//import { first } from "lodash";
import { totalizador, calcularImpuesto } from "./totalizador.js";


describe("Totalizador", () => {
 
  it("deberia mostra la cantidad de items multiplicado por el precio", () => {
    expect(totalizador(4,4)).toEqual(16);
  });
  it("Mostrar el precio total del impuesto según el precio neto y el porcentaje de CA", () => {
    expect(calcularImpuesto(5,8.25)).toEqual(5.41.toFixed(2));
  });
 
  it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de TX", () => {
    expect(calcularImpuesto(5,6.25)).toEqual(5.31.toFixed(2));
  });
});
