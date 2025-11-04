/*
	Ejercicio: Friction of an object on a surface
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/

document.getElementById("calculateForm").addEventListener("submit", function (event) {
	event.preventDefault();

	let mass = parseFloat(document.getElementById("mass").value);
	let gravityAcceleration = 9.8;
	let frictionCoeffi = 0.25;

	calculateFriction(mass, gravityAcceleration, frictionCoeffi);
});

function calculateFriction(mass, gravityAcceleration, frictionCoeffi) {
	let normalForce = mass * gravityAcceleration;
	let frictionForce = frictionCoeffi * normalForce;

	let result = '';


	if (frictionForce > 50) {
		result='Friction high: ' + frictionForce;
	}

	else {
		result='Friction low: ' + frictionForce;
	}

	document.getElementById("result").textContent = result + ' N';
}





