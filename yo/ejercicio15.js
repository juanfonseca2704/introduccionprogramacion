let numer=[],n,i,turn=1,result;
i=parseInt(prompt("Ingrese la cantidad de numeros que desea registrar"));
do{
    n=parseInt(prompt("Ingrese numeros, turno N°"+turn));
    add=numer.add(n);
    turn++;
}while(turn<i)