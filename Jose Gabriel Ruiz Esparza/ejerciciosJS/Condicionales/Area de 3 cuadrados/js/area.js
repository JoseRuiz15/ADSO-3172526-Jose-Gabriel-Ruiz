/*
	Ejercicio: Area of ​​three squares
	Fecha: 22 sept 2025
	Autor: Gabriel Ruiz
*/


//declarando variable

let sideOne=2;
let sideTwo=2;
let sideThree=2;
let areaOne;
let areaTwo;
let areaThree;



// Procesos

areaOne= sideOne * sideOne
areaTwo= sideTwo * sideTwo
areaThree= sideThree * sideThree

if(areaOne==areaTwo && areaTwo == areaThree){
	console.log("The areas are equal");
}

else if(areaOne > areaTwo && areaTwo >= areaThree) {
	console.log('areaOne is greater' + areaOne);
}

else if(areaTwo > areaOne && areaOne >= areaThree) {
	console.log('areaTwo is greater' + areaTwo);
}

else {
	console.log('areaThree is greater' + areaThree);
}





