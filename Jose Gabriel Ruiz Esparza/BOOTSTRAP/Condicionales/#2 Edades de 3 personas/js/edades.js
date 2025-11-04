/*
	Ejercicio: Age of three people
	Fecha: 22 sept 2025
	Autor: Gabriel Ruiz
*/
document.getElementById("ageForm").addEventListener("submit", function (event) {
	event.preventDefault();

	let age1 = parseInt(document.getElementById("age1").value);
	let age2 = parseInt(document.getElementById("age2").value);
	let age3 = parseInt(document.getElementById("age3").value);

	calculateAge(age1, age2, age3);
});



function calculateAge(ageOne, ageTwo, ageThree) {

	let personOne = ageOne;
	let personTwo = ageTwo;
	let personThree = ageThree;

	let resultOne = "";
	let resultTwo = "";
	let resultThree = "";

	let prom = Math.round((personOne + personTwo + personThree) / 3);




	if (personOne >= 18) {
		resultOne = 'Person one is of legal age: ' + ageOne + ' Years old';
	}

	else {
		resultOne = 'Person one is a minor: ' + ageOne + ' Years old';
	}

	if (personTwo >= 18) {
		resultTwo = 'Person Two is of legal age: ' + ageTwo + ' Years old';
	}

	else {
		resultTwo = 'Person Two is a minor: ' + ageTwo + ' Years old';
	}

	if (personThree >= 18) {
		resultThree = 'Person Three is of legal age: ' + ageThree + ' Years old';
	}

	else {
		resultThree = 'Person Three is a minor: ' + ageThree + ' Years old';
	}

	document.getElementById("ageOneResult").textContent = resultOne;
	document.getElementById("ageTwoResult").textContent = resultTwo;
	document.getElementById("ageThreeResult").textContent = resultThree;
	document.getElementById("averageResult").textContent = 'The average age is: ' + prom + ' Years old';


}
