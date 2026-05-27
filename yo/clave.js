//clave
let intentos=3;
let contrasena="hola1234";
let ingreso;
do{
    ingreso=prompt("Dijite la contraseña");
    if(ingreso === contrasena){
        alert("ACCESO CONCEDIDO");
    }else{ 
        intentos--;
        if(intentos>0){
            alert("ACCESO DENEGADO");
        }else{
            alert("ALERTA INTRUSO");
        }}
}while(intentos>0 && ingreso!==contrasena);