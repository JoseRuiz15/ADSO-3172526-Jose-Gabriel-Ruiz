/*
	Ejercicio: Weight calculation on different planets
	Fecha: 23 sept 2025
	Autor: Gabriel Ruiz
*/


// Declarando variables
let mass;
let weight;
let count = 0;
let totalWeight = 0;
let option;
let gravity;

// Procesos
while (true) {
    mass = parseFloat(prompt("Ingrese la masa (numero negativo para terminar):"));
    
    if (mass < 0) {
        console.log("Programa terminado");
        break;
    }
    
    option = parseInt(prompt("Elija el planeta:1. Tierra (9.81)\n2. Marte (3.71)\n3. Jupiter (24.79)"));
    
    // Asignar gravedad según la opción
    if (option === 1) {
        gravity = 9.81;
    } else if (option === 2) {
        gravity = 3.71;
    } else if (option === 3) {
        gravity = 24.79;
    } else {
        console.log("Opción inválida, intente de nuevo");
        continue; // vuelve a pedir
    }
    
    weight = mass * gravity;
    console.log("El peso en ese planeta es: " + weight + " N");
    
    totalWeight += weight;
    count++;
}

// Resultados finales
console.log("La suma total de todos los pesos es: " + totalWeight + " N");
console.log("Cantidad de calculos realizados: " + count);