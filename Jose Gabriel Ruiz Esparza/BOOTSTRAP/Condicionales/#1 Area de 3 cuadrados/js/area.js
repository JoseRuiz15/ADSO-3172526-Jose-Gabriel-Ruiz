/*
	Ejercicio: Area of ​​three squares
	Fecha: 22 sept 2025
	Autor: Gabriel Ruiz
*/

// Capturamos el envío del formulario y pasamos los valores a la función
document.getElementById("areaForm").addEventListener("submit", function(event) {
	event.preventDefault(); // Evita que se recargue la página

	let lado1 = parseFloat(document.getElementById("lado1").value);
	let lado2 = parseFloat(document.getElementById("lado2").value);
	let lado3 = parseFloat(document.getElementById("lado3").value);

	calcularAreaCuadrado(lado1, lado2, lado3);
});


function calcularAreaCuadrado(sideOne, sideTwo, sideThree) {
	let areaOne = sideOne * sideOne
	let areaTwo = sideTwo * sideTwo
	let areaThree = sideThree * sideThree

	let resultado="";

	if (areaOne == areaTwo && areaTwo == areaThree) {
		resultado = "The areas are equal" + " (" + areaOne + " u²)";
	}
	
	// Dos iguales y mayores que la tercera
	else if (areaOne === areaTwo && areaOne > areaThree) {
		resultado = "Area One and Area Two are equal and greater (" + areaOne + " u²)";
	}
	else if (areaOne === areaThree && areaOne > areaTwo) {
		resultado = "Area One and Area Three are equal and greater (" + areaOne + " u²)";
	}
	else if (areaTwo === areaThree && areaTwo > areaOne) {
		resultado = "Area Two and Area Three are equal and greater (" + areaTwo + " u²)";
	}

	// Dos iguales y menores que la tercera
	else if (areaOne === areaTwo && areaOne < areaThree) {
		resultado = "Area Three is greater (" + areaThree + " u²)";
	}
	else if (areaOne === areaThree && areaOne < areaTwo) {
		resultado = "Area Two is greater (" + areaTwo + " u²)";
	}
	else if (areaTwo === areaThree && areaTwo < areaOne) {
		resultado = "Area One is greater (" + areaOne + " u²)";
	}

	// Todos diferentes
	else if (areaOne >= areaTwo && areaTwo >= areaThree) {
		resultado = 'area One is greater' + " (" + areaOne + " u²)";
	}
	else if (areaTwo >= areaOne && areaOne >= areaThree) {
		resultado = 'area Two is greater' + " (" + areaTwo + " u²)";
	}
	else {
		resultado = 'area  Three is greater' + " (" + areaThree + " u²)";
	}
	

	document.getElementById("resultadoAreaMayor").textContent = resultado;
}

