// Filtro de destinos por categoría

document.addEventListener("DOMContentLoaded", function () {

  var botones = document.querySelectorAll(".filter-btn");
  var tarjetas = document.querySelectorAll(".dest-card");
  var contador = document.querySelector(".destinations__count");

  for (var i = 0; i < botones.length; i++) {
    botones[i].onclick = function () {
      var filtro = this.getAttribute("data-filter");

      // Quitar activo de todos y ponérselo al que se hizo click
      for (var j = 0; j < botones.length; j++) {
        botones[j].classList.remove("filter-btn--active");
      }
      this.classList.add("filter-btn--active");

      // Recorrer tarjetas y mostrar/ocultar
      var visibles = 0;
      for (var k = 0; k < tarjetas.length; k++) {
        var cat = tarjetas[k].getAttribute("data-category");

        if (filtro === "todos" || cat === filtro) {
          tarjetas[k].style.display = "";
          visibles++;
        } else {
          tarjetas[k].style.display = "none";
        }
      }

      // Actualizar texto del contador
      if (filtro === "todos") {
        contador.textContent = visibles + " todos los destinos";
      } else if (filtro === "real") {
        contador.textContent = visibles + " destinos reales";
      } else {
        contador.textContent = visibles + " destinos ficticios";
      }
    };
  }

});
