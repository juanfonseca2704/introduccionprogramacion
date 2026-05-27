//temperatura
let menu=0,temperatura=0;
let menor0=[]
let igual0=[]
let mayor0=[]
let registro=[]
while(menu != 2){
    menu= parseInt(prompt("1. Ingresar una temperatura\n2. ver datos"));
    switch(menu){
    case 1:
        temperatura=parseInt(prompt("ingrese la temperatura"));
        if(temperatura>99 || temperatura <-99){
            alert("dato invalido");
        }else if (temperatura>0){
            mayor0.push(temperatura);
            registro.push(temperatura);
            alert("temperatura agregada");
        }else if(temperatura==0){
            igual0.push(temperatura);
            registro.push(temperatura);
            alert("temperatura agregada");
        }else{
            menor0.push(temperatura);
            registro.push(temperatura);
            alert("temperatura agregada");
        }break;
    case 2:
    break;
}
}
document.write("TEMPERATURAS<br>");
document.write("menores a 0:<br>"+menor0.length+"<br>");
document.write("iguales a 0:<br>"+igual0.length+"<br>");
document.write("mayores a 0:<br>"+mayor0.length+"<br>");
document.write("REGISTRO<BR>"+registro)
