/*
	Ejercicio: Calculation of Friction Force
	Fecha: 25 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables

let mass;
let count;
let number = 3;
let frictionForce;
let coefficientFriction;
let normalForce;
let gravity= 9.8;

// procesos

coefficientFriction = parseFloat(prompt("Ingrese el coeficiente de friccion"));

for (count=1; count<= number; count++){

	mass = parseFloat(prompt("Ingrese la masa"));
	normalForce = mass * gravity;
	frictionForce = coefficientFriction * normalForce;
	console.log("La fuerza de friccion es: " + frictionForce)
}

