// Fecha: 4 de julio de 2025 a las 19:00
const objetivo = new Date("2025-07-04T19:00:00").getTime();
const inicio = new Date().getTime();
const totalDuracion = objetivo - inicio;

const contador = document.getElementById("cuenta-regresiva");
const barra = document.getElementById("barra-progreso");
const mensaje = document.getElementById("mensaje-arriba");

const mensajes = [
  "Pensando en todos nuestros recuerdos...",
  "Preparando un momento mágico solo para ti...",
  "Cargando aventuras y sonrisas...",
  "Cada segundo nos acerca más...",
  "¿Lista para la sorpresa?",
  "El universo está brillando para ti...",
  "¡Esto será inolvidable!"
];

let indiceMensaje = 0;
mensaje.innerText = mensajes[indiceMensaje];

function actualizarMensaje() {
  indiceMensaje = (indiceMensaje + 1) % mensajes.length;
  mensaje.innerText = mensajes[indiceMensaje];
}

setInterval(actualizarMensaje, 10000);

function actualizarCuenta() {
  const ahora = new Date().getTime();
  const restante = objetivo - ahora;
  const transcurrido = ahora - inicio;

  if (restante <= 0) {
    contador.innerText = "¡Llegó el momento! 💙✨";
    barra.style.width = "100%";
    mensaje.innerText = "Gracias por ser tú. 💙";
    return;
  }

  const dias = Math.floor(restante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((restante % (1000 * 60)) / 1000);

  contador.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  const porcentaje = Math.min(100, (transcurrido / totalDuracion) * 100);
  barra.style.width = `${porcentaje}%`;
}

setInterval(actualizarCuenta, 1000);
actualizarCuenta();
