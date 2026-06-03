let menu,persona=400,aje=0,atl=0,fut=0,gim=0,nat=0;
do{
menu=parseInt(prompt('Selecione el deporte que practica\n1.Ajedrez\n2.Atletismo\n3.Futbol\n4.Gimnasia\n5.Natacion\n6.salir'));
if(menu==1){
    aje++;
    persona--;
}else if(menu==2){
    atl++;
    persona--;
}else if(menu==3){
    fut++;
    persona--;
}else if(menu==4){
    gim++;
    persona--;
}else if(menu==5){
    nat++;
    persona--;
}else if(menu==6){
    alert("Cerrando registro")

}else{
    alert("Digite valores permitidos")
}
}while(menu!=6 && persona>0);
document.write(`
    <h2>RESULTADOS</h2><br>
    <h3>
    1.Ajedrez: ${aje}<br>
    2.Atletismo: ${atl}<br>
    3.Futbol: ${fut}<br>
    4.Gimnasia: ${gim}<br>
    5.Natacion: ${nat}<br>
    </h3>
    `);