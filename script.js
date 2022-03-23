function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDistanciaNum = parseFloat(valor);

  var valorEmAnoLuz = valorDistanciaNum * 0.0000000000001057;
  //var valorEmAnoLuz = //valorDistanFixo.toFixed(1000);
  //console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Resultado em Anos Luz é " + valorEmAnoLuz;
  elementoValorConvertido.innerHTML = valorConvertido;
}