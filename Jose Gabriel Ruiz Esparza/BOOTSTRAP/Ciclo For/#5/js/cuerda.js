/*
	Ejercicio: Calculating Tension in a Rope
	Fecha: 25 sept 2025
	Autor: Gabriel Ruiz
*/

const form = document.getElementById("tensionForm");
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
      <div class="mb-2">
        <label>Masa del objeto #${i} (kg):</label>
        <input type="number" id="masa${i}" class="form-control" step="any">
      </div>
    `;
  }

  inputsContainer.innerHTML += `
    <button class="btn btn-success w-100 mt-3" type="button" onclick="calcularTension(${cantidad})">
      Calcular Tensiones
    </button>
  `;
}

function calcularTension(cantidad) {
  resultados.innerHTML = "";

  for (let i = 1; i <= cantidad; i++) {
    const m = parseFloat(document.getElementById(`masa${i}`).value);
    if (isNaN(m) || m <= 0) continue;

    const T = m * g;
    resultados.innerHTML += `<p>Objeto ${i}: Masa ${m} kg → Tensión = ${T.toFixed(2)} N</p>`;
  }
}
