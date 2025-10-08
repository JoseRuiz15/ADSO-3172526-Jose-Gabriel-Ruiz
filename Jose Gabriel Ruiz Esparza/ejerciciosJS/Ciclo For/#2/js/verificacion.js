/*
	Ejercicio: Verification of Newton's First Law
	Fecha: 25 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables


let number;
let netForce;
let count;

// procesos
	number= parseInt(prompt('Ingrese la cantidad de valores de fuerzas netas aplicadas.'));

for (count=1; count<= number; count++){
	netForce= parseInt(prompt('Valores de fuerzas netas aplicadas.'));

	if(netForce==0){
	console.log("La fuerza neta es: " + netForce + " El objeto permanece en reposo o movimiento uniforme")

	} else {
	console.log("La fuerza neta es: " + netForce + " El objeto cambia su estado de movimiento (acelera o desacelera)" )
	
} 

}

