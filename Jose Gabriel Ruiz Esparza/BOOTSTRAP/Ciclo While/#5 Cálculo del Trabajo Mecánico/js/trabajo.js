/*
	Ejercicio: Calculation of Mechanical Work
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/


let totalWork=0;
let count=0;

document.getElementById("trabajoForm").addEventListener("submit", function(event){
	event.preventDefault();

	let distance = parseFloat(document.getElementById("distancia").value);
	let appliedForce = parseFloat(document.getElementById("fuerza").value);

	calcularTrabajo(distance, appliedForce);

	document.getElementById("distancia").value = "";
	document.getElementById("fuerza").value = "";
});

function calcularTrabajo(distance, appliedForce){
	if(isNaN(distance) || isNaN(appliedForce) || distance <= 0){
		document.getElementById("result").innerText = "Por favor ingrese valores válidos y una distancia mayor que cero.";
		return;
	}

	let mechanicalWork = appliedForce * distance;
	totalWork = totalWork + mechanicalWork;
	count = count + 1;

	document.getElementById("result").innerText = 
	`Trabajo Mecánico Realizado en esta operación: ${mechanicalWork} 
	Suma del Trabajo Mecánico: ${totalWork} 
	Cantidad de calculos: ${count}`;
}





























