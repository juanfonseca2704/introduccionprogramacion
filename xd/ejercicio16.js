let numeros=[],numero,pares=0,impares=0;
do {
    num = parseInt(prompt("Ingrese un número (0 para terminar)"));
    if (!isNaN(numero) && numero !== 0) {
        numeros.push(numero);
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
} while (!isNaN(numero) && numero !== 0);
document.write("Cantidad de números pares: " + pares + "<br>");
document.write("Cantidad de números impares: " + impares);