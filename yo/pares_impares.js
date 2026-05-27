//pares_impares
let num, par=0, impar;
do{
    num=parseInt(prompt("Ingrese solo números pares: "));
    if((num%2)===0){
        par++;
    }else
        impar++;
}while((num%2)===0);
document.write("Numeros pares ingresados:"+par);