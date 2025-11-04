/*
	Ejercicio: Two bodies in free fall
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/

document.getElementById('forcesForm').addEventListener('submit', function(event) {
	event.preventDefault();

	let massOne = parseFloat(document.getElementById('massOne').value);
	let massTwo = parseFloat(document.getElementById('massTwo').value);
	let gravity = 9.8; // m/s²

	calculateForces(massOne, massTwo, gravity);
});

function calculateForces(massOne, massTwo, gravity) {
	
	let forceOne = massOne * gravity;
	let forceTwo = massTwo * gravity;
	let result = '';

	if (forceOne == forceTwo) {
		result = 'Forces equal ';
	}

	else if (forceOne > forceTwo) {
		result = 'Body One is greater: ' + forceOne;
	}

	else {
		result = 'Body Two is greater: ' + forceTwo;
	}

	document.getElementById('result').textContent = result + ' N';

}


