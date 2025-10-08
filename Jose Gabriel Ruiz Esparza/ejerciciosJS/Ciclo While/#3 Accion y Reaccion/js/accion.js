/*
	Ejercicio: Calculation of Newton's Third Law (Action and Reaction)
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables
let force=0;
let forceReaction;
let totalForce=0;
let count=0;


// procesos

while (true){

	force=parseFloat(prompt("Ingrese una fuerza o ingrese 0 para terminar"));

if(force==0){
	console.log("Programa terminado");
	break;
}

	else {
	forceReaction = -force;
	count= count + 1
	totalForce= totalForce + (-force);
	console.log('La fuerza de reaccion es: ' + forceReaction);	
}
}

	console.log('La suma de todas las fuerzas es: ' + totalForce);
	console.log("Cantidad de calculos realizados: " + count);

