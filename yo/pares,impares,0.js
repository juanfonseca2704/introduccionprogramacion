//pares impares & 0
let numeros = [];
let n;
let pares = 0;
let impares = 0;
do{
    n = prompt("Ingrese un numero (0 para terminar)");
    n = parseInt(n);
    if(!isNaN(n) && n != 0){
        numeros.push(n);
        if(n % 2 == 0){
            pares++;
        }else{
            impares++;
        }
    }
}while(!isNaN(n) && n != 0);
document.write("Numeros ingresados: " + numeros + "<br>");
document.write("Cantidad de pares: " + pares + "<br>");
document.write("Cantidad de impares: " + impares);