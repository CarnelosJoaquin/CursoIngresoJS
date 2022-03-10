/*Simulacro 8, Carnelos Duarte Joaquín Alejo*/
/*Mostrar información
Enunciado:

Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perro u "otra cosa"(solo hay esos tres tipos)
el tipo de pelaje (corto, largo, sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo, internado o adopción)
la temperaruta corporal y nos piden informar solo si existe
a)El perro más pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la última mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Qué tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Qué estado clínico tiene la menor cantidad de mascotas
H)Cuál es el promedio de kilos de peso, tomando todas las mascotas
i)El nombre y raza del gato sin pelos más liviano*/
function mostrar()
{
	let mascota;
	let pelaje;
	let nombre;
	let raza;
	let peso;
	let estadoClinico;
	let temperaturaCorporal;
	let respuesta;
	let pesoPerroPesado=0;
	let nombrePerroPesado;
	let cantPerros=0;
	let cantGatos=0;
	let cantOtros=0;
	let cantInternados=0;
	let cantAdopcion=0;
	let cantEnfermos=0;
	let promedioEnfermos;
	let ultimaTipoOTra;
	let sinPeloFrio=0;
	let animalFrioSinPelo;
	let bandera=0;
	let sinPelo=0;
	let acumTempPerro=0;
	let acumTempGato=0;
	let acumTempOtro=0;
	let promedioTempPerro;
	let promedioTempGato;
	let promedioTempOtro;
	let mayorPromedio;
	let promedioCatDog;
	let menorEstado;
	let acumuladorKilos=0;
	let promedioKilos;
	let sinPeloLiviano;
	let bandera2=0;
	let nombreSinPeloLiviano;
	let razaSinPeloLiviano;
	let cantGatoSinPelo=0

	do{
		mascota=prompt("Ingrese mascota: gato/perro/otra cosa");
		while(!(mascota=="gato"||mascota=="perro"||mascota=="otra cosa")) {
			mascota=prompt("Por favor,Ingrese mascota: gato/perro/otra cosa");
		}
		pelaje=prompt("Ingrese pelaje: corto/largo/sin pelo");
		while(!(pelaje=="corto"||pelaje=="largo"||pelaje=="sin pelo")) {
			pelaje=prompt("Por favor,Ingrese pelaje: corto/largo/sin pelo");
		}
		if(mascota!="otra cosa"){
			edad=parseInt(prompt("Ingrese años de edad(entre 1 y 20)."));
    		while(isNaN(edad)||edad>20||edad<1){
      			edad=(prompt("Por favor,Ingrese años de edad(entre 1 y 20)"));
    		}
    		peso=parseFloat(prompt("Ingrese peso en KG(1-40"));{
    			while(isNaN(peso)||peso<1||peso>40){
    				peso=parseFloat(prompt("Por favor, Ingrese peso en KG(1-40"));
    			}
    		}
		}
		else{
			edad=parseInt(prompt("Ingrese años de edad(entre 1 y 80)."));
    		while(isNaN(edad)||edad>80||edad<1){
      			edad=(prompt("Por favor,Ingrese años de edad(entre 1 y 80)"));
    		}
    		peso=parseFloat(prompt("Ingrese peso en KG(1-80"));
    		while(isNaN(peso)||peso<1||peso>80){
    			peso=parseFloat(prompt("Por favor, Ingrese peso en KG(1-80"));
    		}
		}
    	raza=prompt("Ingrese raza:");
		while(!(isNaN(raza))){
			raza=prompt("Por favor,Ingrese raza:");
		}
		estadoClinico=prompt("Ingrese estado clínico: enfermo/internado/adopción");
		while(!(estadoClinico=="enfermo"||estadoClinico=="internado"||estadoClinico=="adopción")){
			estadoClinico=prompt("Por favor,Ingrese estado clínico: enfermo/internado/adopción");
		}
		temperaturaCorporal=parseFloat(prompt("Ingrese temperaturaCorporal en °C"));
		while(isNaN(temperaturaCorporal)){
			temperaturaCorporal=parseFloat(prompt("Por favor, ingrese una temperatura real en °C"));
		}
		switch(mascota){
			case"perro":
			cantPerros++;
			if(peso>pesoPerroPesado){
				pesoPerroPesado=peso;
				nombrePerroPesado=nombre;
			}
			acumTempPerro=acumTempPerro+temperaturaCorporal;
			promedioTempPerro=acumTempPerro/cantPerros;

			break;
			case"gato":
			cantGatos++;
			acumTempGato=acumTempGato+temperaturaCorporal;
			promedioTempGato=acumTempGato/cantGatos;

			break;
			case"otra cosa":
			cantOtros++;
			ultimaTipoOTra=nombre;
			acumTempOtro=acumTempOtro+temperaturaCorporal;
			promedioTempOtro=acumTempOtro/cantOtros;

			break;
		}
		acumuladorKilos=acumuladorKilos+peso;
		if(promedioTempPerro<promedioTempOtro&&promedioTempGato){
			mayorPromedio="perros";
		}
			else if(promedioTempGato<promedioTempOtro){
				mayorPromedio="gatos";
			}
				else{
					mayorPromedio= "tipo otra cosa";
				}
		switch(estadoClinico){
			case"internado":
			cantInternados++;
			break;
			case"adopción":
			cantAdopcion++;
			break;
			case"enfermo":
			cantEnfermos++;
			break
		}
		if(cantEnfermos>cantAdopcion&&cantInternados){
			menorEstado="enfermos";
		}
			else if(cantAdopcion>cantInternados){
				menorEstado="en adopción";
			}
				else{
					menorEstado= "internados";
				}
		if(pelaje=="sin pelo"){
			sinPelo++;
			if(temperaturaCorporal<sinPeloFrio||bandera==0){
				bandera=1;
				sinPeloFrio=temperaturaCorporal;
				animalFrioSinPelo=mascota;

			}
			if(mascota=="gato"){
				cantGatoSinPelo++;
				if(peso<sinPeloLiviano||bandera2==0){
					bandera2=1;
					sinPeloLiviano=peso;
					razaSinPeloLiviano=raza;
					nombreSinPeloLiviano=nombre;
				}
			}
		}
		promedioKilos=acumuladorKilos/(cantGatos+cantPerros+cantOtros)*100;
		promedioCatDog=(cantPerros+cantGatos)/(cantPerros+cantGatos+cantOtros)*100;
		respuesta=prompt("Desea ingresar los datos de otra persona: si/no");
		promedioEnfermos=cantEnfermos/(cantAdopcion+cantEnfermos+cantInternados)*100;
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");
	if(cantPerros!=0){
		document.write("El perro mas pesado se llama "+nombrePerroPesado+".<br>");
	}
	if(cantEnfermos!=0){
		document.write("El promedio de mascotas enfermas sobre el total es de "+promedioEnfermos+"%.<br>")
	}
	if (cantOtros!=0) {
		document.write("La ultima mascota tipo otra en ingresar se llama "+ultimaTipoOTra+".<br>");
	}
	if(sinPelo!=0){
		document.write("El animal sin pelo con menor temperatura corporal es de tipo "+animalFrioSinPelo+".<br>");
	}
	document.write("El mayor promedio de temperatura corporal de mascotas lo tienen los "+mayorPromedio+".<br>");
	if (cantPerros!=0||cantGatos!=0) {
		document.write("El promedio de cantidad de gatos y perros sobre otro tipo de mascotas es "+promedioCatDog+"%.<br>");
	}
	document.write("El estado clínico con menor cantidad de mascotas es"+menorEstado+".<br>");
	document.write("El promedio de kilos de peso de todas las mascotas es "+promedioKilos+".<br>");
	if(cantGatoSinPelo!=0){
		document.write("El nombre del gato sin pelo mas liviano es "+nombreSinPeloLiviano+" y es de raza "+razaSinPeloLiviano+".<br>")
	}
}