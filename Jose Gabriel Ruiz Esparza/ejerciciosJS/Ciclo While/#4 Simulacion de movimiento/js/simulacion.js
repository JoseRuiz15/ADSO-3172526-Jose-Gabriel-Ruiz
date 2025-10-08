/*
	Ejercicio: Motion simulation
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables
let speed = 0;
let time = 1;
let distance;
let totalDistance = 0;
let movementSecond = 0;
let appliedForce;
let acceleration;
let mass;

// procesos
 
 appliedForce = parseFloat (prompt("Ingrese la fuerza aplicada, digite 0 para salir"));

while (appliedForce !== 0) {
	mass = parseFloat (prompt("Ingrese la masa"));

	acceleration = appliedForce / mass;
	speed = speed + acceleration * time;
	distance = speed * time;

	totalDistance = totalDistance + distance;
	movementSecond = movementSecond + 1;

console.log("Segundos en que el objeto ha estado en movimiento: " + movementSecond);
console.log("Distancia recorrida: " + distance);


appliedForce = parseFloat (prompt("Ingrese la fuerza aplicada, digite 0 para salir"));

	
}

console.log("Distancia total recorrida: " + totalDistance);
	

























