/*
	Ejercicio: Calculation of Friction Force
	Fecha: 25 sept 2025
	Autor: Gabriel Ruiz
*/

const form = document.getElementById("friccionForm");
const inputsContainer = document.getElementById("inputsContainer");
const resultados = document.getElementById("resultados");
const g = 9.8;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cantidad = parseInt(document.getElementById("cantidad").value);
  generarCampos(cantidad);
});

function generarCampos(cantidad) {
  inputsContainer.innerHTML = "";
  resultados.innerHTML = "";

  for (let i = 1; i <= cantidad; i++) {
    inputsContainer.innerHTML += `
      <div class="row mb-2">
        <div class="col">
          <label>Masa #${i} (kg):</label>
          <input type="number" id="masa${i}" class="form-control" step="any">
        </div>
        <div class="col">
          <label>Coeficiente μ #${i}:</label>
          <input type="number" id="mu${i}" class="form-control" step="any">
        </div>
      </div>
    `;
  }

  inputsContainer.innerHTML += `
    <button class="btn btn-success w-100 mt-3" type="button" onclick="calcularFriccion(${cantidad})">
      Calcular Fuerzas
    </button>
  `;
}

function calcularFriccion(cantidad) {
  resultados.innerHTML = "";

  for (let i = 1; i <= cantidad; i++) {
    const m = parseFloat(document.getElementById(`masa${i}`).value);
    const mu = parseFloat(document.getElementById(`mu${i}`).value);

    if (isNaN(m) || isNaN(mu) || m <= 0 || mu < 0) continue;

    const N = m * g;
    const F = mu * N;
    resultados.innerHTML += `<p>Cálculo ${i}: Masa ${m} kg, μ=${mu} → F. fricción = ${F.toFixed(2)} N</p>`;
  }
}


