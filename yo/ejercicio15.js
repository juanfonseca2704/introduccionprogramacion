let numer=[],n,i,turn=0,result,add,suma=0;
i=parseInt(prompt("Ingrese la cantidad de numeros que desea registrar"));
do{
    n=parseInt(prompt("Ingrese numeros, turno N°"+(turn+1)));
    add=numer.push(n);
    turn++;
}while(turn<=i)
do{
    suma=suma+numer[turn]
}while(i);