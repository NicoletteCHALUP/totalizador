//import { first } from "lodash";
import { totalizador, calcularImpuesto, aplicarDescuento } from "./totalizador.js";


describe("Totalizador", () => {
 
  it("deberia mostra la cantidad de items multiplicado por el precio", () => {
    expect(totalizador(4,4)).toEqual(16);
  });
  it("Mostrar el precio total del impuesto según el precio neto y el porcentaje de CA", () => {
    expect(calcularImpuesto(5,8.25)).toEqual("5.41");
  });
  it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de TX", () => {
    expect(calcularImpuesto(5,6.25)).toEqual("5.31");
  });
  it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de AL", () => {
    expect(calcularImpuesto(5,4)).toEqual("5.20");
  });
  it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de NV", () => {
    expect(calcularImpuesto(5,8)).toEqual("5.40");
  });
  it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de UT", () => {
    expect(calcularImpuesto(5,6.65)).toEqual("5.33");
  });
  it("Mostrar el precio total con el Porcentaje de descuento que corresponde a 1000", () => {
    expect(aplicarDescuento(1001)).toEqual(3);
  });
  it("Mostrar el precio total con el Porcentaje de descuento que corresponde a 3000", () => {
    expect(aplicarDescuento(3001)).toEqual(5);
  });
});
