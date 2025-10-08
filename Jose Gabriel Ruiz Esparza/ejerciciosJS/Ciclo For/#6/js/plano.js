/*
	Ejercicio: Simulation of an Object on an Inclined Plane
	Fecha: 25 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables

let mass;
let count;
let number=3;
let gravity= 9.8;
let angle;
let parallelForce;

// procesos

for (count=1; count<= number; count++){

	mass = parseFloat(prompt("Ingrese la masa"));
	angle = parseFloat(prompt("Ingrese el angulo"));
	parallelForce = mass * gravity * angle
console.log("La fuerza paralela del objeto es: " + parallelForce)

	
}

