
import totalizador, { calcularImpuesto } from "./totalizador";


const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#anio-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado2-div");
const div3 = document.querySelector("#resultado3-div");
const optionsSelect = document.getElementById("options");
const optionsContainer = document.getElementById("options-container");
const resultadoDiv = document.getElementById("resultado3-div");

function scrollToOption(optionValue) {
  const optionElement = document.querySelector(`option[value="${optionValue}"]`);
  optionElement.scrollIntoView({ behavior: "smooth", block: "center" });
  return optionElement.textContent;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const selectedOption = optionsSelect.value;
  const selectedOptionText = scrollToOption(selectedOption);

  div2.innerHTML = "<p>" + "Estado: " + selectedOptionText + "</p>";

  const precioNetoItem = totalizador(firstNumber, secondNumber);
  //const impuestoPorcentaje = getImpuestoPorcentaje(selectedOption);
 // const precioTotalItem = calcularImpuesto(precioNetoItem, impuestoPorcentaje);
  
  div.innerHTML = "<p>Precio Neto: ("+firstNumber+" * "+secondNumber+") = "+precioNetoItem+"</p>";
});

optionsSelect.addEventListener("change", function () {
  const selectedOption = optionsSelect.value;
  const taxPercentage = getImpuestoPorcentaje(selectedOption);

  resultadoDiv.textContent = "El estado seleccionado tiene un impuesto del: "+taxPercentage;
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