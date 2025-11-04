/*
	Ejercicio: The force of an object
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/

document.getElementById("forceForm").addEventListener("submit", function (event) {
	event.preventDefault();

	let mass = parseFloat(document.getElementById('mass').value);
	let acceleration = parseFloat(document.getElementById('acceleration').value);
	

	calculateForce(mass, acceleration);

});
function calculateForce(mass, acceleration) {
	let result = "";
	let force = mass * acceleration;

	if (force >= 100) {
		result = 'Force high: ' + force;
	}

	else if (force < 100) {
		result = 'Force low: ' + force;
	}

	document.getElementById("result").textContent = result;
}




