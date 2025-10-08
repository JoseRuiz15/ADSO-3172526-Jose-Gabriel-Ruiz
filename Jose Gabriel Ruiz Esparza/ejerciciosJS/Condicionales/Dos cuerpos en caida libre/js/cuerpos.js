/*
	Ejercicio: Two bodies in free fall
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/


//declarando variable

let massOne=40;
let massTwo=40;
let gravity;
let forceOne;
let forceTwo;


// Procesos
gravity= 9.8
forceOne= massOne * gravity
forceTwo= massTwo * gravity


if (forceOne == forceTwo) {
	console.log('Forces equal ');
}

else if (forceOne == forceTwo) {
	console.log('Forces not equal ');
}

else if(forceOne > forceTwo){
	console.log('Force One is greater: ' + forceOne);
}

else {
	console.log('Force Two is greater: ' + forceTwo);
}




