/*
	Ejercicio: Verification of Newton's First Law
	Fecha: 25 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables

const form = document.getElementById("fuerzaForm");
const inputsContainer = document.getElementById("inputsContainer");
const resultadosDiv = document.getElementById("resultados");

// Evento principal del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidad = parseInt(document.getElementById("cantidad").value);
  generarCampos(cantidad);
});

// Función para generar los campos de entrada
function generarCampos(cantidad) {
  inputsContainer.innerHTML = "";
  resultadosDiv.innerHTML = "";

  for (let i = 1; i <= cantidad; i++) {
    inputsContainer.innerHTML += `
      <div class="mb-2">
        <label class="form-label">Fuerza neta #${i}:</label>
        <input type="number" id="fuerza${i}" class="form-control" step="any">
      </div>
    `;
  }

  inputsContainer.innerHTML += `
    <button class="btn btn-success w-100 mt-3" type="button" onclick="evaluarFuerzas(${cantidad})">
      Evaluar Fuerzas
    </button>
  `;
}

// Función para evaluar las fuerzas ingresadas
function evaluarFuerzas(cantidad) {
  resultadosDiv.innerHTML = "";

  for (let i = 1; i <= cantidad; i++) {
    const f = parseFloat(document.getElementById(`fuerza${i}`).value);

    if (isNaN(f)) {
      resultadosDiv.innerHTML += `<p>Fuerza ${i}: valor no válido.</p>`;
    } else if (f === 0) {
      resultadosDiv.innerHTML += `<p>Fuerza ${i}: Reposo o movimiento uniforme.</p>`;
    } else {
      resultadosDiv.innerHTML += `<p>Fuerza ${i}: Cambia su estado de movimiento.</p>`;
    }
  }
}
