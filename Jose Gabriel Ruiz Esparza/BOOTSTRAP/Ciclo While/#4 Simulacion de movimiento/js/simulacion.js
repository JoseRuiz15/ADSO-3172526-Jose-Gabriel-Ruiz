/*
	Ejercicio: Motion simulation
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/
let totalDistance = 0;
let movementSecond = 0;
let time = 1;
let speed = 0;

document.getElementById("simulacionForm").addEventListener("submit", function (event) {
	event.preventDefault();

	let appliedForceInput = document.getElementById("fuerza").value;
	let massInput = document.getElementById("masa").value;

	let appliedForce = parseFloat(appliedForceInput);
	let mass = parseFloat(massInput);

	calcularMovimiento(appliedForce, mass);

	document.getElementById("fuerza").value = "";
	document.getElementById("masa").value = "";
});

function calcularMovimiento(appliedForce, mass) {
	if (isNaN(appliedForce) || appliedForce == 0 || isNaN(mass) || mass == 0) {
		document.getElementById("resultSimulacion").innerText = "El objeto permanece en reposo, digite valores diferentes.";
		return;
	}

	let acceleration = appliedForce / mass;
	speed = speed + acceleration * time;
	let distance = speed * time;

	totalDistance = totalDistance + distance;
	movementSecond = movementSecond + 1;

	document.getElementById("resultSimulacion").innerText =
		`Distancia total recorrida: ${totalDistance.toFixed(2)} m\nSegundos de movimiento: ${movementSecond} s`;
}