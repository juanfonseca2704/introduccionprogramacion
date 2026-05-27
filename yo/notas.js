let nota1,nota2;
nota1 = prompt("ingrese la nota practica")
nota2 = prompt("ingrese la nota teórica")
if(nota1 >= 4 && nota2 >= 4){
    document.write("su nota es "+((nota1*0.35) + (nota2*0.65)))
}else{
    document.write("su definitiva es 0")
}
  