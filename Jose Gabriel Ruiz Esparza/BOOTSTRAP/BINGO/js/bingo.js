document.addEventListener("DOMContentLoaded", () => {
  const celdas = document.querySelectorAll(".bingo-cell");
  const filas = 5;
  const columnas = 5;

  // Crear la matriz bingo (5x5)
  const bingo = [];
  for (let fila = 0; fila < filas; fila++) {
    const filaNueva = [];
    for (let columna = 0; columna < columnas; columna++) {
      const numero = (fila + 1) * 2 + columna * 10;
      filaNueva.push(numero);
    }
    bingo.push(filaNueva);
  }

  // Llenar las celdas con números y guardar posiciones
  let index = 0;
  for (let fila = 0; fila < filas; fila++) {
    for (let columna = 0; columna < columnas; columna++) {
      celdas[index].textContent = bingo[fila][columna];
      celdas[index].dataset.fila = fila;
      celdas[index].dataset.columna = columna;
      index++;
    }
  }

  function limpiar() {
    celdas.forEach(celda => {
      celda.style.backgroundColor = "white";
      celda.style.color = "black";
    });
  }

  function marcar(fila, columna, color) {
    const celda = Array.from(celdas).find(
      c => Number(c.dataset.fila) === fila && Number(c.dataset.columna) === columna
    );
    if (celda) {
      celda.style.backgroundColor = color;
      celda.style.color = "white";
    }
  }

  // Letra L
  document.querySelector(".btn-primary").addEventListener("click", () => {
    limpiar();
    for (let fila = 0; fila < 5; fila++) marcar(fila, 0, "#0d6efd");
    for (let col = 1; col < 5; col++) marcar(4, col, "#0d6efd");
  });

  // Letra J
  document.querySelector(".btn-success").addEventListener("click", () => {
    limpiar();
    for (let fila = 0; fila < 5; fila++) marcar(fila, 4, "#198754");
    marcar(4, 2, "#198754");
    marcar(4, 3, "#198754");
  });

  // Letra I
  document.querySelector(".btn-warning").addEventListener("click", () => {
    limpiar();
    for (let col = 0; col < 5; col++) marcar(0, col, "#ffc107");
    for (let col = 0; col < 5; col++) marcar(4, col, "#ffc107");
    for (let fila = 1; fila < 4; fila++) marcar(fila, 2, "#ffc107");
  });

  // Letra X
  document.querySelector(".btn-danger").addEventListener("click", () => {
    limpiar();
    for (let i = 0; i < 5; i++) {
      marcar(i, i, "#dc3545");
      marcar(i, 4 - i, "#dc3545");
    }
  });
});
