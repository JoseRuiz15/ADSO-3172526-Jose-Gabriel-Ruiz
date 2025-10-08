/*
	Ejercicio: Calculating Tension in a Rope
	Fecha: 25 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables

let mass;
let count;
let number;
let tension;
let gravity= 9.8;

// procesos

number = parseFloat(prompt("Ingrese la cantidad de objetos que quiere calcular"));

for (count=1; count<= number; count++){

	mass = parseFloat(prompt("Ingrese la masa"));
	tension = mass * gravity
	console.log("La tension del objeto es: " + tension)
	
}

