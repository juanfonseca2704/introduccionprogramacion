//venta autos
let venta,cant,comi;
venta = prompt("Ingrese el valor de ventas, en millones")
cant = prompt("Ingrese el valor de autos vendidos")
comi = prompt("Ingrese el total de ventas en millones")
if(venta>500 || cant > 10){
    document.write("felicidades has conseguido la comisión de $" + comi*0.025 + "millones")
}else{
    document.write("No supero las metas planteadas")
}
