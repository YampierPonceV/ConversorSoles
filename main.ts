const DOM = (selector) => document.querySelector(selector);

const formularioDom = DOM("#formulario");
const montoDom = DOM("#monto");
const resultadoDom = DOM("#resultado");

const dolar: number = 4.04;

const validacion = (e: Event) => {
  e.preventDefault();
  if ($monto.value == "") return false;
  const monto = Number(montoDom.value);
  const resultado: number = DOLAR * monto;
  resultadoDom.textContent = `El monto en soles es S/ ${resultado}`;
};

$formulario.addEventListener("submit", validacion);
