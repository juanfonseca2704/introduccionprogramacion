//fraciones
let  n,x,i=2,cont=1;
    x=parseInt(prompt("Ingrese el número que será X: "));
        while (isNaN(x) || x === "") {
            x = parseInt(prompt("Error. Ingrese un número válido: "));
        }
    n=parseInt(prompt("Ingrese el numero de veces que desea que se repita: "));
        while (isNaN(n) || n === "") {
            n = parseInt(prompt("Error. Ingrese un número válido: "));
        }
do{
    let oper=(x**i)/i;
    document.write(`<h6>${x}<sup>${i}</sup><br>---\n=\n${oper}<br>${i}<br><br></h6>`);
    i+=2;
    cont++;
}while(cont<=n);
