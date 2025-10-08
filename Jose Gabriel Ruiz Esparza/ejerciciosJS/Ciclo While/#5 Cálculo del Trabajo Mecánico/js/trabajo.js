/*
	Ejercicio: Calculation of Mechanical Work
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables
let mechanicalWork;
let totalWork=0;
let appliedForce;
let distance
let count=0;

// procesos

	distance= parseFloat(prompt("Porfavor ingrese la distancia, digite un negativo para terminar"));
	
while (distance > 0){
	
	appliedForce= parseFloat(prompt("Porfavor ingrese la fuerza aplicada, digite un negativo para terminar"));

	mechanicalWork = appliedForce * distance
	totalWork = totalWork + mechanicalWork
	count = count + 1
	
	console.log("Trabajo mecanico = " + mechanicalWork)

 	distance= parseFloat(prompt("Porfavor ingrese la distancia, digite un negativo para terminar"));
}

console.log("La suma total del trabajo realizado: " + totalWork)
console.log("La cantidad de calculos es: " + count)



























