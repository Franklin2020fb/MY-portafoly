let horas = 0;
let minutos = 0;
let segundos = 0;
function temporizador() {
  document.getElementById('tiempo').innerHTML = horas + " horas " + minutos + " minutos " + segundos + " segundos";
  segundos++;
  if (segundos >= 60) {
    segundos = 0;
    minutos++;
    if (minutos >= 60) {
      minutos = 0;
      horas++;
    }
  }
}
setInterval(temporizador, 1000);
