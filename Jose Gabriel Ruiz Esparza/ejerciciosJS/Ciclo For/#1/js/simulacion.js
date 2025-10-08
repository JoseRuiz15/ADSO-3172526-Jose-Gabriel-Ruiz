/*
	Ejercicio: Calculation of the Resultant Force (Newton's Second Law)
	Fecha: 25 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables

let mass;
let acceleration;
let force;
let count;
let number;


// procesos
	number= parseInt(prompt("Ingrese la cantidad de calculos a realizar"));

for (count=1; count<= number; count++){

	mass= parseFloat(prompt("Ingrese la masa"));
	acceleration= parseFloat(prompt("Ingrese la aceleracion"));
	force= mass * acceleration
	console.log("la fuerza resultante es:" +force)
}

