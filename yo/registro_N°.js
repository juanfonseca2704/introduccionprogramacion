let numer=[],n,i,turn=1,result,add,suma=0;
i=parseInt(prompt("Ingrese la cantidad de numeros que desea registrar"));
do{
    n=parseInt(prompt("Ingrese numeros, turno N°"+(turn)));
    add=numer.push(n);
    turn++;
}while(turn<=i)
    turn=0;
do{
    suma=suma+numer[turn];
    turn++;
}while(turn<i);
document.write("La suma es: "+suma+"<br>");
document.write("Fue sumado: "+numer);
