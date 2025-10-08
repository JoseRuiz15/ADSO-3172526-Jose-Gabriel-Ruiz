/*
	Ejercicio: Final notes
	Fecha: 22 sept 2025
	Autor: Gabriel Ruiz
*/


//declarando variable

let gradeOne=5;
let gradeTwo=3;
let gradeThree=3;
let percentOne;
let percentTwo;
let percentThree;
let finalGrade;

// Procesos

percentOne= gradeOne * 0.20;
percentTwo= gradeTwo * 0.35;
percentThree = gradeThree * 0.45
finalGrade= percentOne + percentTwo + percentThree

console.log(finalGrade)

if (finalGrade > 4,5){
	console.log('Superior grade ' + finalGrade)
}

else if (finalGrade > 3.5 && finalGrade <= 4.5){
	console.log('Great grade' + finalGrade)
}

else if (finalGrade > 3 && finalGrade <=3.5){
	console.log('Medium grade' + finalGrade)
}

else {
	console.log('the final grade is less than 3')
}










