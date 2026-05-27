let A,AA,AAA,cant1,cant2,cant3,total,precio1,desc,preciot;
let frec, dia;
const fecha=["lunes-viernes","sabado","domingo"];
do{
    cant1=parseInt(prompt("cantidad de huevos tipo A:"));
}while(cant1<0);
do{
    cant2=parseInt(prompt("cantidad de huevos tipo AA:"));
}while(cant2<0);
do{
    cant3=parseInt(prompt("cantidad de huevos tipo AAA:"));
}while(cant3<0);
do{
    frec=prompt("Si es cliente frecuente digite 1 de lo contrario 0:");
}while(frec!=1 && frec!=0);
total=cant1+cant2+cant3;
do{
    dia=parseInt(prompt("Digite 1, si compro entre Lunes o viernes, 2 si compro el sabado, 3 si compro el domingo:"));
}while(dia<1 || dia>3)
if(dia==1){
    A=600+(600*0.05);
    AA=700+(700*0.05);
    AAA=750+(750*0.05);
}else if(dia==2){
    A=600-(600*0.05);
    AA=700-(700*0.05);
    AAA=750-(750*0.05);
}else{
    A=600;
    AA=700;
    AAA=750;
}
precio1=((A*cant1)+(AA*cant2)+(AAA*cant3));
if(total>=30 && total<=45){
    desc=(precio1-(precio1*0.1));
}else if(total>=46 && total<=70){
    desc=(precio1-(precio1*0.15));
}else if(total>=71 && total<=100){
    desc=(precio1-(precio1*0.2));
}else if(total>=101){
    desc=(precio1-(precio1*0.25));
}else{
    desc=precio1;
}
if(frec==1){
    preciot=desc-(precio1*0.025);
}else{
    preciot=desc;
}
document.write("Total huevos A: "+cant1);
document.write("<br>Total huevos AA: "+cant2);
document.write("<br>Total huevos AAA: "+cant3);
document.write("<br>Total huevos: "+total);
document.write("<br>Dia de la compra: "+fecha[dia-1]);
document.write("<br>precio de tipo de huevo:<br>A: "+A+"<br>AA: "+AA+"<br>AAA: "+AAA);
document.write("<br>precio de la compra: "+precio1);
document.write("<br>precio descuento por cantidad: "+desc);
document.write("<br>precio de cliente frecuente: "+preciot);
document.write("<br><h2>==Gracias por su compra==<h2>");
