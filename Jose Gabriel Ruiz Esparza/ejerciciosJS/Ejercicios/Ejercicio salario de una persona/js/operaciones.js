/*
	Ejercicio: Ejercicio salario de una persona
	Fecha: 20 sept 2025
	Autor: Gabriel Ruiz
*/


//declarando variable
let daysWorked=30;
let dayValue=50.000;
let salary;
let netSalary
let discount;
let pension;
let health;
let arl;

// Procesos

salary= daysWorked * dayValue;
health= salary * 0.12;
pension= salary * 0.12;
arl= salary * 0.052;
discount= health + pension + arl;
netSalary= salary - discount;


// Imprimir

console.log("Salario: "+ salary);
console.log("Salud: "+ health);
console.log("Pension: "+ pension);
console.log("Arl: "+ arl);
console.log("Descuentos: "+ discount);
console.log("SalarioNeto: "+ netSalary);



