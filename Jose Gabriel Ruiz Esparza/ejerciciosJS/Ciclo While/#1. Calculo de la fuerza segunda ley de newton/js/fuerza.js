/*
	Ejercicio: Calculation of Newton's second law of force
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/


//declarando variable
let force;
let count= 0;
let totalForce=0;


// Procesos
while (true) {
	let mass= parseFloat(prompt("Ingrese la masa (Numero negativo para terminar):"))
	let acceleration= parseFloat(prompt("Ingrese la aceleracion(Numero negatico para salir):"))

if (mass <= 0 && acceleration <= 0){
	console.log('Programa terminado');
	break;	
		
}

else{
	force= mass * acceleration;
	totalForce= totalForce + force;
	count ++;

	console.log("La fuerza calculada es: " + force)
	
}
}

console.log("La Suma total de la fuerza: " + totalForce)
console.log("Cantidad de calculos: " + count);

s



