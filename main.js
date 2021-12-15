var $ = function (selector) { return document.querySelector(selector); };
var $formulario = $("#formulario");
var $monto = $("#monto");
var $resultado = $("#resultado");
var DOLAR = 4.04;
function Validacion(e) {
    e.preventDefault();
    if ($monto.value == "")
        return false;
    var monto = Number($monto.value);
    var resultado = DOLAR * monto;
    $resultado.textContent = "El monto en soles es S/ ".concat(resultado);
}
$formulario.addEventListener("submit", Validacion);
