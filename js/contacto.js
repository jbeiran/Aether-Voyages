// Validación del formulario y countdown de lanzamiento
var form = document.getElementById("formReserva");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Limpiar errores anteriores
  document.getElementById("error-nombre").textContent = "";
  document.getElementById("error-email").textContent = "";
  document.getElementById("error-destino").textContent = "";
  document.getElementById("error-fecha").textContent = "";
  document.getElementById("error-terminos").textContent = "";
  document.getElementById("nombre").style.borderColor = "";
  document.getElementById("email").style.borderColor = "";
  document.getElementById("fecha-ida").style.borderColor = "";

  var ok = true;

  // Nombre
  if (document.getElementById("nombre").value.trim().length < 3) {
    document.getElementById("error-nombre").textContent = "Mínimo 3 caracteres";
    document.getElementById("error-nombre").style.color = "#e05252";
    document.getElementById("nombre").style.borderColor = "#e05252";
    ok = false;
  }

  // Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value)) {
    document.getElementById("error-email").textContent = "Formato de correo no válido";
    document.getElementById("error-email").style.color = "#e05252";
    document.getElementById("email").style.borderColor = "#e05252";
    ok = false;
  }

  // Destino
  if (!document.getElementById("destino").value) {
    document.getElementById("error-destino").textContent = "Selecciona un destino";
    document.getElementById("error-destino").style.color = "#e05252";
    ok = false;
  }

  // Fecha de ida
  var fechaInput = document.getElementById("fecha-ida").value;
  if (!fechaInput || new Date(fechaInput) <= new Date()) {
    document.getElementById("error-fecha").textContent = "La fecha debe ser futura";
    document.getElementById("error-fecha").style.color = "#e05252";
    document.getElementById("fecha-ida").style.borderColor = "#e05252";
    ok = false;
  }

  // Términos
  if (!document.querySelector('[name="terminos"]').checked) {
    document.getElementById("error-terminos").textContent = "Debes aceptar los términos";
    document.getElementById("error-terminos").style.color = "#e05252";
    ok = false;
  }

  if (!ok) return;

  // Si todo bien, ocultar formulario y mostrar confirmación
  var nombre = document.getElementById("nombre").value.trim();
  var select = document.getElementById("destino");
  var destino = select.options[select.selectedIndex].text;

  document.getElementById("confirmacion-texto").innerHTML =
    "Gracias, <strong>" + nombre + "</strong>. " +
    "Tu solicitud de viaje a <strong>" + destino + "</strong> " +
    "ha sido registrada. Nos pondremos en contacto contigo.";

  form.style.display = "none";
  document.getElementById("confirmacion").style.display = "";

  // Countdown
  var lanzamiento = new Date();
  lanzamiento.setDate(lanzamiento.getDate() + 47);

  var intervalo = setInterval(function () {
    var resta = lanzamiento - new Date();

    if (resta < 0) {
      clearInterval(intervalo);
      return;
    }

    document.getElementById("cd-dias").textContent = Math.floor(resta / 86400000);
    document.getElementById("cd-horas").textContent = Math.floor((resta % 86400000) / 3600000);
    document.getElementById("cd-min").textContent = Math.floor((resta % 3600000) / 60000);
    document.getElementById("cd-seg").textContent = Math.floor((resta % 60000) / 1000);
  }, 1000);

  // Botón volver
  document.getElementById("btn-nueva-reserva").onclick = function () {
    clearInterval(intervalo);
    document.getElementById("confirmacion").style.display = "none";
    form.style.display = "";
    form.reset();
  };
});
