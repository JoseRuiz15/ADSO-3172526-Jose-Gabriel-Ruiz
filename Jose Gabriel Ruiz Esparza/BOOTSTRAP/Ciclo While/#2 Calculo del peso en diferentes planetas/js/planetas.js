/*
	Ejercicio: Weight calculation on different planets
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/

let totalWeight = 0;
let cantidadCalculos = 0;

document.getElementById("planetForm").addEventListener("submit", function (event) {
    event.preventDefault();


	let massInput = document.getElementById("mass");
    let mass = parseFloat(massInput.value);

    calcularPeso(mass);

    massInput.value = "";

});

function calcularPeso(mass) {

    if (isNaN(mass) || mass < 0) {
        document.getElementById("result").innerText = "Por favor ingrese un valor de masa válido.";
        return;
    }

        const planetSelect = document.getElementById("planet");
        const gravity = parseFloat(planetSelect.value);
        const weight = mass * gravity;
        totalWeight += weight;
        cantidadCalculos++;

        document.getElementById("result").innerText = 
        `El peso en este planeta es: ${weight.toFixed(2)} N 
        Peso total acumulado: ${totalWeight.toFixed(2)} N
        Cantidad de cálculos: ${cantidadCalculos}`;
}

