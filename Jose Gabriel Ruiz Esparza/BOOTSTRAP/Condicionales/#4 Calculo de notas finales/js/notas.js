/*
	Ejercicio: Final notes
	Fecha: 22 sept 2025
	Autor: Gabriel Ruiz
*/

document.getElementById("gradeForm").addEventListener("submit", function (event) {
	event.preventDefault();

let gradeOne = parseFloat(document.getElementById('gradeOne').value);
let gradeTwo = parseFloat(document.getElementById('gradeTwo').value);
let gradeThree = parseFloat(document.getElementById('gradeThree').value);


calcularNotaFinal(gradeOne, gradeTwo, gradeThree);

});

function calcularNotaFinal(gradeOne, gradeTwo, gradeThree) {
	
	let percentOne = gradeOne * 0.20;
	let percentTwo = gradeTwo * 0.35;
	let percentThree = gradeThree * 0.45
	let finalGrade = percentOne + percentTwo + percentThree

	let result = 0;

	if (finalGrade > 4.5) {
		result = finalGrade + ' "Nota superior" ';
	}

	else if (finalGrade > 3.5 && finalGrade <= 4.5) {
		result = finalGrade + ' "Nota buena" ';
	}

	else if (finalGrade > 3 && finalGrade <= 3.5) {
		result = finalGrade + ' "Nota media" ';
	}

	else {
		result = finalGrade +' "Nota mala" ';
	}

	document.getElementById("finalGrade").textContent = result;
}


