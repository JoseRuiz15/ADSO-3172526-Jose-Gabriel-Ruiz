/*
	Ejercicio: Acceleration of an object subjected to a force
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/


document.getElementById("accelerationForm").addEventListener("submit", function(event) {
	event.preventDefault();
	let force = parseFloat(document.getElementById("forceInput").value);
	let mass = parseFloat(document.getElementById("massInput").value);
	
	calculateAcceleration(force, mass);
});

function calculateAcceleration(force, mass) {
	let acceleration = force / mass;
	let result = '';


if (acceleration > 5) {
	result = 'Acceleration high: ' + acceleration;
}

else {
	result = 'Acceleration low: ' + acceleration;
}

document.getElementById("result").textContent = result;


}




