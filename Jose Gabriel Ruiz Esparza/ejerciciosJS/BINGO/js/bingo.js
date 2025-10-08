//Encabezado BINGO

let letras= ["B", "I", "N", "G", "O"];

// Matriz

let bingo = []

//Llenar la matriz

for (let fila = 0; fila < 5; fila++) {
	let filaNueva = [];


for (let columna = 0; columna < 5; columna ++) {

// Se generan los datos de la matriz
	let numero = (fila + 1) * 2 + columna * 10
	filaNueva.push(numero);
    }

 bingo.push(filaNueva);

}

console.log("" + letras.join("    "));

for (let fila = 0; fila < bingo.length; fila ++){
console.log(bingo[fila].join("   "));
}

// Crear otro array para recorrer la martiz y extraer los datos de la letra

let I = [];

for(let columna = 0; columna < bingo[0].length; columna++){
 I.push(bingo[0][columna]);
}

for(let fila = 1; fila < 4; fila++){
 I.push(bingo[fila][2]);
}

for(let columna = 0; columna < bingo[4].length; columna++){
 I.push(bingo[4][columna]);
}

console.log("Letra I: " + I);


let L = [];

for(let columna = 0; columna < bingo.length; columna++){
 L.push(bingo[columna][0])
}
for(let fila=1; fila < bingo.length; fila++) {
 L.push(bingo[4][fila]);
}

console.log("Letra L: " + L);

let J = [];

for(let fila = 0; fila < bingo.length; fila++) {
 J.push(bingo[fila][4])
}

for(let columna = 2; columna <= 3; columna++) {
 J.push(bingo[4][columna])
}


console.log("Letra J: " + J);








