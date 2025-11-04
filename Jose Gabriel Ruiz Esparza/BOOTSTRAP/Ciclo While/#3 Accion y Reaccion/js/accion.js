/*
	Ejercicio: Calculation of Newton's Third Law (Action and Reaction)
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/

let totalForce = 0;
let count = 0;

document.getElementById("accionReaccionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let forceInput = document.getElementById("fuerzaAccion");
    let force = parseFloat(forceInput.value);
	
    calcularReaccion(force);
    forceInput.value = "";
});

function calcularReaccion(force) {
    if (isNaN(force) || force === 0) {
        document.getElementById("result").innerText = "Por favor ingrese una fuerza válida y diferente de cero.";
        return;
    }
    let forceReaction = -force;
    count++;
    totalForce += forceReaction;
    document.getElementById("result").innerText = 
	`La fuerza de reacción es: ${forceReaction} N
	Suma total de fuerzas: ${totalForce} N
	Cantidad de cálculos realizados: ${count}`;
}
