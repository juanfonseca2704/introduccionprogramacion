//cuadraticas
let a,b,c,d,x,x1,x2;
a = Number(prompt("ingrese un número que será A"));
b = Number(prompt("ingrese un número que será B"));
c = Number(prompt("ingrese un número que será C"));

document.write("===ECUACIÓN CUADRATICA===<br>");
document.write(a+"x<sup>2</sup>+"+b+"x+"+c+"<br>")
document.write("===SOLUCIÓN===<br>");

d = b*b -4*(a*c);

if(d > 0){
    x1 = (-b+Math.sqrt(d))/2*a;
    x2 = (-b-Math.sqrt(d))/2*a;
    document.write("tiene dos soluciones reales<br>");
    document.write("x1 = "+x1+"<br>");
    document.write("x2 = "+x2)
}else if (d == 0){
    x = (-b)/2*a;
    document.write("tiene una solución<br>");
    document.write("x = "+x);
}else{
    document.write("no tiene soluciones reales");
}
