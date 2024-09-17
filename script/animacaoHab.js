var texto = "Minhas Habilidades";
var atraso = 100;
var textoElemento = document.querySelector(".habilidades-titulo");

var contadorDeLetras = 0;

function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();
