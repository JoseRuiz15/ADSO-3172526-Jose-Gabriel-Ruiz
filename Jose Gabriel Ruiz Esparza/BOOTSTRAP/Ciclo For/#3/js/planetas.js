/*
	Ejercicio: Calculating the Weight of an Object on Different Planets
	Fecha: 25 sept 2025
	Autor: Gabriel Ruiz
*/

const form = document.getElementById("pesoForm");
const resultadosDiv = document.getElementById("resultados");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const masa = parseFloat(document.getElementById("masa").value);
  resultadosDiv.innerHTML = "";

  if (isNaN(masa) || masa <= 0) {
    resultadosDiv.innerHTML = "<p class='text-danger'>Por favor ingresa una masa válida.</p>";
    return;
  }

  const planetas = [
    { nombre: "Tierra", g: 9.8 },
    { nombre: "Marte", g: 3.7 },
    { nombre: "Júpiter", g: 24.8 },
    { nombre: "Luna", g: 1.6 }
  ];

  for (let i = 0; i < planetas.length; i++) {
    const peso = masa * planetas[i].g;
    resultadosDiv.innerHTML += `<p>${planetas[i].nombre}: ${peso.toFixed(2)} N</p>`;
  }
});

