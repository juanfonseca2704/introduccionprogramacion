//radar
let cifra,c1,c2,c3,c4,existe;
let tipo=["dirigible","avion militar","avion civil de carga","avion civil de pasajeros","aeronave sin permiso","aeronave de supertranzporte","aeronave enemiga","avion mixto","helicoptero","globo aerostatico"]
let lugar=["norte","norte","sur","sur","oriente","oriente","occidente","occidente","desconocido","desconocido"]

//proceso
cifra=prompt("ingrese los datos")
c4=Math.trunc(cifra%10)
c3=Math.trunc(cifra/10)%10;
c2=Math.trunc(cifra/100)%10;
c1=Math.trunc(cifra/1000)%10;
if(c1%2===0){
    existe=true;

}else{
    existe=false;
}
//resultado
document.write("Hay una aeronave en el area: "+existe)
if(existe){
    document.write("<br>Tipo de aeronave: "+tipo[c2])
    document.write("<br>Hay una aeronave a "+c3+"Km")
    document.write("<br>Viene una aeronave del "+lugar[c4])
}else{
    document.write("<br>No hay aeronaves")
}
