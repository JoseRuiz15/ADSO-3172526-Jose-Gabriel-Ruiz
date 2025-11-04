/*
	Ejercicio: Calculation of Gravitational Potential Energy
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables
let count = 0;
const gravity = 9.81;
let epg;
let totalEpg = 0;

document.getElementById("epgForm").addEventListener("submit", function(event) {
	event.preventDefault();

	let height = parseFloat(document.getElementById("altura").value);
	let mass = parseFloat(document.getElementById("masa").value);

	calcularEpg(height, mass);

	document.getElementById("altura").value = '';
	document.getElementById("masa").value = '';
});
function calcularEpg(height, mass) {
	if (isNaN(height) || isNaN(mass) || height < 0) {
		document.getElementById("result").innerText = "Errr. Por favor, ingrese una altura valida.";
		return;
	}
		epg = mass * height * gravity;
		totalEpg += epg;
		count++;
	
	document.getElementById("result").innerText = 
	`Energía Potencial Gravitatoria: ${epg.toFixed(2)} 
	Total EPG Calculada: ${totalEpg.toFixed(2)} 
	Cantidad de Cálculos: ${count}`;

}
























