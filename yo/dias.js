let dias=["lunes","martes","miercoles","jueves","Viernes","sabado","domingo"];
let dia=parseInt(prompt("ingrese un numero del 1 al 7, 1 siendo lunes y 7 siendo domingo"));
if(dia>=1 && dia<=7){
    document.write("el dia ingresado es: "+dias[dia-1]);
}else{
    document.write("NUMERO INVALIDO");
}