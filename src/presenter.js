import { totalizador, calcularImpuesto,aplicarDescuento } from "./totalizador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#anio-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado2-div");
const div3 = document.querySelector("#resultado3-div");
const div4 = document.querySelector("#resultado4-div");
const optionsSelect = document.getElementById("options");
const resultadoDiv = document.getElementById("#resultado5-div");

function scrollToOption(optionValue) {
  const optionElement = document.querySelector("option[value="+optionValue+"]");
  optionElement.scrollIntoView({ behavior: "smooth", block: "center" });
  return optionElement.textContent;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const selectedOption = optionsSelect.value;
  const selectedOptionText = scrollToOption(selectedOption);
  //div2.innerHTML = "<p>" + "Estado: " + selectedOptionText + "</p>";
  
  const cantidadItems = firstNumber;
  const precioNetoItem = totalizador(firstNumber, secondNumber);
  const impuestoPorcentaje = getImpuestoPorcentaje(selectedOption);
  const descuentoPorcentaje = aplicarDescuento(cantidadItems);
  const precioConDescuento = precioNetoItem * (1 - descuentoPorcentaje / 100);
  const precioTotalItem = calcularImpuesto(precioConDescuento, impuestoPorcentaje);

  div.innerHTML = "<p>Precio Neto: (" + firstNumber + " * $" + secondNumber + ") = $" + precioNetoItem + "</p>";
  div3.innerHTML = "<p>Precio Total : $" + precioTotalItem + "</p>";

  if (descuentoPorcentaje > 0) {
    div4.innerHTML = "<p>Descuento (" + descuentoPorcentaje + "%): " + descuentoPorcentaje + "</p>";
  } else {
    div4.innerHTML = "<p>Descuento : 0%</p>";
  }
 
});

optionsSelect.addEventListener("change", function () {
  const selectedOption = optionsSelect.value;
  const taxPercentage = getImpuestoPorcentaje(selectedOption);

  resultadoDiv.textContent = "El estado seleccionado tiene un impuesto del: %" + taxPercentage + "</p>";
});

function getImpuestoPorcentaje(selectedOption) {
  switch (selectedOption) {
    case "CA": 
      return 8.25;
    case "TX": 
      return 6.25;
    case "NV": 
      return 8.00;
    case "UT": 
      return 6.65;
    case "AL": 
      return 4.00;
    default:
      return 0;
  }
}