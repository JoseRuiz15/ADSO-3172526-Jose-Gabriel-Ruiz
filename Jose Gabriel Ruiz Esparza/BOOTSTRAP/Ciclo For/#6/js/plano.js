/*
	Ejercicio: Simulation of an Object on an Inclined Plane
	Fecha: 25 sept 2025
	Autor: Gabriel Ruiz
*/
const form = document.getElementById("planoForm");
const resultados = document.getElementById("resultados");
const g = 9.8;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const masa = parseFloat(document.getElementById("masa").value);
  const angInicial = parseFloat(document.getElementById("anguloInicial").value);
  const angFinal = parseFloat(document.getElementById("anguloFinal").value);
  const paso = parseFloat(document.getElementById("incremento").value);

  calcularFuerzas(masa, angInicial, angFinal, paso);
});

function calcularFuerzas(masa, angInicial, angFinal, paso) {
  resultados.innerHTML = "";

  if (isNaN(masa) || masa <= 0 || isNaN(angInicial) || isNaN(angFinal) || paso <= 0) {
    resultados.innerHTML = "<p class='text-danger'>Por favor ingresa valores válidos.</p>";
    return;
  }

  for (let ang = angInicial; ang <= angFinal; ang += paso) {
    const rad = ang * (Math.PI / 180); // conversión a radianes
    const F = masa * g * Math.sin(rad);
    resultados.innerHTML += `<p>Angulo ${ang}° → F_paralela = ${F.toFixed(2)} N</p>`;
  }
}
