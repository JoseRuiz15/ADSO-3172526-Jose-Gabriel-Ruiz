/*
	Ejercicio: Area of ​​three squares
	Fecha: 22 sept 2025
	Autor: Gabriel Ruiz
*/
document.getElementById("salaryForm").addEventListener("submit", function (event) {
	event.preventDefault();

	let dayValue = parseFloat(document.getElementById("dayValueForm").value);
	let daysWorked = parseFloat(document.getElementById("daysWorkedForm").value);
	let salaryMin = parseFloat(document.getElementById("salaryMinForm").value)


	totalPay(dayValue, daysWorked, salaryMin);
});

function totalPay(dayValue, daysWorked, salaryMin) {

	let salary = daysWorked * dayValue;
	let arl = salary * 0.12;
	let pension = salary * 0.16
	let health = salary * 0.12
	let transport = 200000
	let retention = salary * 0.04
	let totalDeductible = arl + pension + health + retention
	let totalPay = (salary + transport) - totalDeductible

	let resultTransport = 0;
	let resultRetention = 0;

	if (salary <= (2 * salaryMin)) {
		resultTransport = transport;
	}

	else {
		resultTransport = 0;
	}

	if (salary >= (4 * salaryMin)) {
		resultRetention =  retention;
	}

	else {
		resultRetention = 0;
	}
	document.getElementById("totalPay").value = totalPay.toLocaleString('es-CO');
	document.getElementById("transportAllowance").value = resultTransport.toLocaleString('es-CO');
	document.getElementById("retention").value = resultRetention.toLocaleString('es-CO');
	document.getElementById("health").value = health.toLocaleString('es-CO');
	document.getElementById("pension").value = pension.toLocaleString('es-CO');
	document.getElementById("arl").value = arl.toLocaleString('es-CO');

}








