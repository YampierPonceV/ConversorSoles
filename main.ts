const $ = (selector) => document.querySelector(selector);

const $formulario = $("#formulario");
const $monto = $("#monto");
const $resultado = $("#resultado");

const DOLAR: number = 4.04;

function Validacion(e: Event) {
  e.preventDefault();
  if ($monto.value == "") return false;
  const monto = Number($monto.value);
  const resultado: number = DOLAR * monto;
  $resultado.textContent = `El monto en soles es S/ ${resultado}`;
}

$formulario.addEventListener("submit", Validacion);
