/*
	Ejercicio: Age of three people
	Fecha: 22 sept 2025
	Autor: Gabriel Ruiz
*/


//declarando variable

let ageOne=19;
let ageTwo=16;
let ageThree=20;
let prom;
let personeOne;
let personeTwo;
let personaThree;

// Procesos
personeOne= ageOne;
personeTwo= ageTwo;
personeThree= ageThree;



if (personeOne >= 18) {
	console.log('Persona Uno es mayor de edad' + ageOne)
}

else{
	console.log('Persona Uno es menor de edad')
}

if (personeTwo >= 18) {
	console.log('Persona Dos es maoyor de edad: ' + ageTwo)
}

else{
	console.log('Persona Dos es menor de edad')
}

if (personeOne >= 18) {
	console.log('Persona Tres es maoyor de edad' + ageThree)
}

else{
	console.log('Persona Tres es menor de edad')
}

prom= (ageOne + ageTwo + ageThree) / 3; console.log('El promedio es:' + prom)





