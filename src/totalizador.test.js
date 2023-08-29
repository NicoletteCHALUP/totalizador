import { first } from "lodash";
import totalizador from "./totalizador.js";

describe("Totalizador", () => {
 /* it("deberia imprimir el numero", () => {
    expect(bisiesto(3)).toEqual(3);
  });*/
  it("deberia mostra la cantidad de items multiplicado por el precio", () => {
    expect(totalizador(4,4)).toEqual(16);
  });
 
});