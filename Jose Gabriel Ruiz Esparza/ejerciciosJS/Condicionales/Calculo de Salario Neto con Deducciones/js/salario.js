/*
	Ejercicio: Area of ​​three squares
	Fecha: 22 sept 2025
	Autor: Gabriel Ruiz
*/


//declarando variable

let salary;
let totalSalary;
let totalPay;
let arl;
let health;
let pension;
let deductione
let totalDeductible;
let retention;
let transport;
let salaryMin= 1423000;
let daysWorked= 26;
let dayValue= 100000;


// Procesos

salary= daysWorked * dayValue
arl= salary * 0.12
pension= salary * 0.16
health= salary * 0.12
transport= 200000
retention= salary * 0.04

if( salary <= (2 *salaryMin)){
	console.log('transport=' +transport)
}

else{
	console.log()
}

if (salary >= (4 * salaryMin)){
	console.log('retention='+ retention)
}

else{
	console.log()
}

totalDeductible= arl + pension + health + retention
totalPay= (salary+transport) - totalDeductible

console.log('health:' + health)
console.log('pension:' + pension)
console.log('arl:' + arl)
console.log('The total payment of your salary is:' +totalPay) 










