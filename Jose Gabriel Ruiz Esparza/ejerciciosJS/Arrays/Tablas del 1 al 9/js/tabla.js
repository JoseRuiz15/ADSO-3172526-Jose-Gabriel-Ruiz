/**
	*Descripción: Generar tabla de multi
	*Autor: Gabriel Ruiz
	*Fecha: 2025-09-29
*/

let tablas= [];

for (let numero = 1; numero <=9; numero ++) {
	let tabla= [];
	for (let multiplicador = 1; multiplicador <=10; multiplicador ++){
		tabla.push(numero * multiplicador);
	}
	tablas.push(tabla);
}

for (let numero = 0; numero < tablas.length; numero ++) {
	console.log(`Tabla del ${numero + 1}: ${tablas[numero]}`)
}