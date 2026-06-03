let numer = [], n, i, turn = 0, suma = 0;

i = parseInt(prompt("Ingrese la cantidad de números que desea registrar"));

do {
    n = parseInt(prompt("Ingrese número, turno N° " + (turn + 1)));
    numer.push(n);
    turn++;
} while (turn < i);

turn = 0;

do {
    suma = suma + numer[turn];
    turn++;
} while (turn < i);

document.write("La suma de los números es: " + suma);