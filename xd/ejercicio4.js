alert("recargando, oprima aceptar");
let num,uni,dec,cent,unimil,decmil,centmil;
num = prompt("ingrese un número de 6 cifras: ");
//     operaciones
uni = Math.trunc(num % 10);
cent = Math.trunc(num/10)%10;
dec = Math.trunc(num/100)%10;
unimil = Math.trunc(num/1000)%10;
decmil = Math.trunc(num/10000)%10;
centmil = Math.trunc(num/100000)%10;

//      proceso
document.write("<br>centenas de mil:"+ centmil);
document.write("<br>decenas de mil:"+ decmil);
document.write("<br>unidades de mil:"+ unimil);
document.write("<br>centenas:"+ cent);
document.write("<br>decenas:"+ dec);
document.write("<br>unidades:"+ uni);

document.write("<br>===RESULTADOS===<br>");
document.write(unimil+"+"+cent+"="+(unimil+cent)+"<br>")
document.write(uni+"x"+centmil+"="+(uni*centmil)+"<br>")
document.write(decmil+"-"+dec+"="+(decmil-dec)+"<br>")
