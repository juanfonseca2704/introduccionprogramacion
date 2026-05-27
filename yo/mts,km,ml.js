//mts,km,ml
let clase,medida;
clase = parseInt(prompt("Ingrese en que unidad de medida desea medir METROS = 1/ KILOMETROS = 2/ MILLAS = 3"))
medida = parseInt(prompt("ingrese la medida que desea conocer"))
switch(clase){
    case 1:document.write("metro= "+medida+", kilometro= "+(medida*0.001)+", milla= "+ (medida*0.000609));break;
    case 2:document.write("kilometro= "+medida+", metro= "+(medida*1000)+", milla= "+(medida*0.621));break;
    case 3:document.write("milla= "+medida+", kilometro= "+(medida*1.609)+", metro= "+(medida*1609.34));break;
    default: document.write("ERROR")
    }
