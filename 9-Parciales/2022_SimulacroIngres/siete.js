/*Simulacro 7, Carnelos Duarte Joaquín Alejo*/
/*Ingrese nombre , sexo , edad (validar que si es mujer debe ser adolescente y si el hombre debe ser niño),
 altura (validar), temperatura corporal(validar)
Necesitamos saber:
a)el nombre y el sexo de la persona con mas temperatura,
b)de las mujeres el nombre de la mas joven ,
c)de los hombre el nombre del mas bajito,
... solo si los hay
d)el promedio de edad entre los hombres,
e)el promedio de edad entre las mujeres,
f)la cantidad de personas que miden mas de 1,60 metros,
g)el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts.*/
function mostrar()
{
	let nombre;
	let sexo;
	let edad;
	let altura;
	let temperaturaCorporal;
	let respuesta;
	let mayorTemperatura=0;
	let sexoMayorTemperatura;
	let nombreMayorTemperatura;
	let mujerJoven=0;
	let nombreMujerJoven;
	let bandera=0;
	let bandera2=0;
	let hombreBajito=0;
	let nombreBajito;
	let acumuladorEdadH=0;
	let acumuladorEdadM=0;
	let cantHombres=0;
	let cantMujeres=0;
	let promedioEdadMujeres;
	let promedioEdadHombres;
	let personasMas160=0;
	let mujeresMas160=0;
	let promedioMujeres160Total;
	do{
		nombre=prompt("Ingrese nombre.");
    	while(!(isNaN(nombre))){
    		nombre=prompt("Por favor, Ingrese nombre real.");
    	}
    	sexo=prompt("Ingrese sexo: femenino/masculino");
    	while(!(sexo=="femenino"||sexo=="masculino")){
      		sexo=prompt("Por favor,Ingrese sexo: femenino/masculino");
    	}
    	if (sexo=="femenino") {
    		edad=parseInt(prompt("Ingrese edad de la adolescente(13-18)."));
    		while(edad>18||edad<13||isNaN(edad)){
      			edad=(prompt("Por favor,Ingrese edad de la adolescente(13-18)."));
   			}
   			altura=parseInt(prompt("Ingrese altura de la adolescente(140-180)"));
   			while(altura<140||altura>180||isNaN(altura)){
      			altura=(prompt("Por favor,Ingrese altura de la adolescente(140-180)."));
   			}
   		}
   		else{
   			edad=parseInt(prompt("Ingrese edad del niño(3-13)."));
    		while(edad<3||edad>12||isNaN(edad)){
      			edad=(prompt("Por favor,Ingrese edad del niño(3-13)."));
   			}
   			altura=parseInt(prompt("Ingrese altura en cm del niño (70-170)"));
   			while(altura<70||altura>170||isNaN(altura)){
      			altura=(prompt("Por favor,Ingrese altura en cm del niño (70-170)."));
   			}
   		}
   		temperaturaCorporal=parseFloat(prompt("Ingrese temperaturaCorporal en °C"));
		while(isNaN(temperaturaCorporal)||(temperaturaCorporal<35||temperaturaCorporal>45)){
			temperaturaCorporal=parseFloat(prompt("Por favor, ingrese una temperatura real en °C"));
		}
		if(temperaturaCorporal>mayorTemperatura){
			mayorTemperatura=temperaturaCorporal;
			nombreMayorTemperatura=nombre;
			sexoMayorTemperatura=sexo;
		}
		if(altura>160){
			personasMas160++;
			if(sexo=="femenino"){
				mujeresMas160++;
			}
		}
		switch(sexo){
			case"femenino":
			if (edad<mujerJoven||bandera==0){
				mujerJoven=edad;
				nombreMujerJoven=nombre;
				bandera=1;
			}
			cantMujeres++;
			acumuladorEdadM=acumuladorEdadM+edad;
			promedioEdadMujeres=acumuladorEdadM/cantMujeres;
			break;
			case"masculino":
			if (altura<hombreBajito||bandera2==0) {
				hombreBajito=altura;
				nombreBajito=nombre;
				bandera2=1;
			}
			cantHombres++;
			acumuladorEdadH=acumuladorEdadH+edad;
			promedioEdadHombres=acumuladorEdadH/cantHombres;
			break;
		}
		promedioMujeres160Total=mujeresMas160/(cantMujeres+cantHombres)*100;
  		respuesta=prompt("Desea ingresar los datos de otra persona: si/no");
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");

	document.write("El nombre de la persona con mayor temperatura corporal es "+nombreMayorTemperatura+" y es de sexo "+sexoMayorTemperatura+".<br>");
	if (cantMujeres!=0) {
		document.write("El nombre de la adolescente mas joven es "+nombreMujerJoven+".<br>");
		document.write("El promedio de edad entre las adolescentes es "+promedioEdadMujeres+".<br>");
	}
	if (cantHombres!=0){
		document.write("El nombre del niño mas bajito es "+nombreBajito+".<br>");
		document.write("El promedio de edad entre los niños es "+promedioEdadHombres+".<br>");
	}
	if(mujeresMas160!=0){
		document.write("La cantidad de adolescentes que miden mas de 160 cm es "+mujeresMas160+".<br>");
		document.write("El promedio de adolescentes que miden mas de 160 cm sobre el total de personas es "+promedioMujeres160Total+"%.<br>");
	}
}

