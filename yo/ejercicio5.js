let hr,min,seg;
hr = parseInt(prompt("ingrese aqui horas"));
min = parseInt(prompt("ingrese aqui minutos"));
seg = parseInt(prompt("ingrese aqui segundos"));
    if(hr == 23 && min == 59 && seg == 59){
        hr =0;min=0;seg=0;
    }else if(min==59&&seg==59){
        hr+=1;min=0;seg=0;
    }else if(seg==59){
        min+=1;seg=0
    }else{
        seg+=1
    }
document.write("la hora un segundo despues es= "+hr+":"+min+":"+seg);
