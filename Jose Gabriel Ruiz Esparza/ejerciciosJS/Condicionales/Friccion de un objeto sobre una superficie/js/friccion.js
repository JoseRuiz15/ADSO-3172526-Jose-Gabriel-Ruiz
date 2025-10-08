/*
	Ejercicio: Friction of an object on a surface
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/


//declarando variable

let mass= 20;
let gravityAcceleration= 9.8;
let frictionCoeffi= 0.25;
let frictionForce;
let normalForce;

// Procesos

normalForce= mass * gravityAcceleration;
frictionForce= frictionCoeffi * normalForce;

if (frictionForce > 50) {
	console.log('Friction high: ' + frictionForce)
}

else {
	console.log('Friction low: ' + frictionForce)
}







