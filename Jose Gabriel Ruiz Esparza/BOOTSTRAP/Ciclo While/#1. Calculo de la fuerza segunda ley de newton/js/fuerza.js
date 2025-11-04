/*
	Ejercicio: Calculation of Newton's second law of force
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/

// Variables globales para acumular los resultados
let totalFuerza = 0;
let cantidadCalculos = 0;

// Captura el evento del formulario
document.getElementById("fuerzaForm").addEventListener("submit", function (event) {
	event.preventDefault();

	let masaInput = document.getElementById("masa");
	let aceleracionInput = document.getElementById("aceleracion");

	let masa = parseFloat(masaInput.value);
	let aceleracion = parseFloat(aceleracionInput.value);

	calcularFuerza(masa, aceleracion);

	masaInput.value = "";
  	aceleracionInput.value = "";
});

// Función que realiza el cálculo
function calcularFuerza(masa, aceleracion) {
	const resultado = document.getElementById("result");

	// Condición de finalización
	if (masa < 0 || aceleracion < 0) {
		resultado.innerText =
			`Programa terminado.
Total de fuerza acumulada: ${totalFuerza.toFixed(2)} N
Cantidad de cálculos: ${cantidadCalculos}`;
		return;
	}

	// Validar entrada
	if (isNaN(masa) || isNaN(aceleracion)) {
		resultado.innerText = "Ingrese valores válidos.";
		return;
	}

	// Calcular la fuerza actual
	let fuerza = masa * aceleracion;
	totalFuerza += fuerza;
	cantidadCalculos++;

	// Mostrar resultados
	resultado.innerText =
		`Fuerza calculada: ${fuerza.toFixed(2)} N
Fuerza total acumulada: ${totalFuerza.toFixed(2)} N
Cantidad de cálculos: ${cantidadCalculos}`;

}



