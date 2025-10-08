/*
	Ejercicio: Calculation of Gravitational Potential Energy
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables
let mass;
let height;
let count = 0;
let gravity = 9.81;
let epg;
let totalEpg = 0;

height = parseFloat (prompt("Ingrese la altura, negativa para finalizar"));

// procesos

 while (height > 0) {
	mass = parseFloat (prompt("Ingrese la masa"));

	epg = mass * height * gravity
	totalEpg = totalEpg + epg 
	count = count + 1
	
	console.log("Energia Potencial Calculada: " + epg);

	height = parseFloat (prompt("Ingrese la altura, negativa para finalizar"));

}

console.log("La suma total de la Energia Potencial Calculada es: " + totalEpg);
console.log("La cantidad de calculos es: " + count);






















