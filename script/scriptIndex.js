var texto = " com um Effect Creator de qualidade!";
var atraso = 130;
var textoElemento = document.querySelector(".titulo-destaque");

var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto(); 