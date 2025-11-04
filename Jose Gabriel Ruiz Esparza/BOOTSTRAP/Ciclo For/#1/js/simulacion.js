/*
	Ejercicio: Calculation of the Resultant Force (Newton's Second Law)
	Fecha: 25 sept 2025
	Autor: Gabriel Ruiz
*/

let count = 0;
let resultantForce = 0;

document.getElementById("fuerzaForm").addEventListener("submit", function (event) {
	event.preventDefault();

	let number = parseInt(document.getElementById("cantidad").value, 10);
	if (isNaN(number) || number < 1) {
		alert("Ingresa una cantidad válida (1 o más).");
		return;
	}

	generateFields(number);
});

function generateFields(number) {
	const container = document.getElementById("inputsContainer");
	container.innerHTML = ""; 

	for (let i = 1; i <= number; i++) {
		let group = document.createElement("div");
		group.classList.add("card", "p-3", "mb-3", "shadow-sm");
		group.innerHTML = `
			<h5 class="mb-3">Cálculo ${i}</h5>
			<div class="mb-3">
				<label for="masa${i}" class="form-label">Masa (kg):</label>
				<input type="number" id="masa${i}" class="form-control" step="any" required>
			</div>
			<div class="mb-3">
				<label for="aceleracion${i}" class="form-label">Aceleración (m/s²):</label>
				<input type="number" id="aceleracion${i}" class="form-control" step="any" required>
			</div>
		`;

		container.appendChild(group);
	}

	
	const existingBtn = document.getElementById("btnCalcularFuerzas");
	if (existingBtn) existingBtn.remove();

	const calculateButton = document.createElement("button");
	calculateButton.type = "button";
	calculateButton.id = "btnCalcularFuerzas";
	calculateButton.classList.add("btn", "btn-primary", "w-100");
	calculateButton.innerText = "Calcular Fuerza Resultante";
	calculateButton.addEventListener("click", function () {
		calculateForce(number);
	});

	container.appendChild(calculateButton);
}

function calculateForce(number) {
	const resultContainer = document.getElementById("result");
	resultContainer.innerHTML = ""; 
	let totalFuerza = 0;

	for (count = 1; count <= number; count++) {
		const masaEl = document.getElementById(`masa${count}`);
		const acelEl = document.getElementById(`aceleracion${count}`);

		if (!masaEl || !acelEl) {
			resultContainer.innerHTML += `<p class="text-danger">Error: no se encontró el campo del cálculo ${count}.</p>`;
			continue;
		}

		let mass = parseFloat(masaEl.value);
		let acceleration = parseFloat(acelEl.value);

		if (isNaN(mass) || isNaN(acceleration)) {
			resultContainer.innerHTML += `<p class="text-warning"> Faltan datos validos en el calculo ${count}.</p>`;
			continue;
		}

		resultantForce = mass * acceleration;
		totalFuerza += resultantForce;

		resultContainer.innerHTML += `<p>La fuerza resultante ${count} es: <strong>${resultantForce.toFixed(2)} N</strong></p>`;
	}
}
		