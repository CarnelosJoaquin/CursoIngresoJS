/*Parcial 2020 Ej3; Carnelos Duarte Joaquin Alejo*/
/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let viudosMayores=0;
	let noCasados=0;
	let temperaturaCorporal;
	let temperaturaAlta=0;
	let maxTemperatura=0;
	let respuesta="si";
	let acumuladorEdad=0;
	let pasajeros=0;
	let promedioSolteros;
	let solteros=0
	do{
		nombre=prompt("Ingrese nombre real del pasajero.");
		edad=parseInt(prompt("Ingrese años de edad."));
		while(isNaN(edad)||(edad>100&&edad<0)){
			edad=(prompt("Ingrese años de edad reales del pasajero"));
		}
		sexo=prompt("Ingrese sexo: f/m");
		while(sexo!="f"&&sexo!="m"){
			sexo=prompt("Por favor,Ingrese sexo: f/m");
		}
		estadoCivil=prompt("Ingrese estado civil: soltero/casado/viudo");
		while(!(estadoCivil=="soltero"||estadoCivil=="casado"||estadoCivil=="viudo")){
			estadoCivil=prompt("Por favor, ingrese estado civil: soltero/casado/viudo");
		}
		temperaturaCorporal=parseFloat(prompt("Ingrese temperaturaCorporal en °C"));
		while(isNaN(temperaturaCorporal)||(temperaturaCorporal<30||temperaturaCorporal>45)){
			temperaturaCorporal=parseFloat(prompt("Por favor, ingrese una temperatura real en °C"))
		}
		if(temperaturaCorporal>maxTemperatura){
			maxTemperatura=temperaturaCorporal;
		}
		switch(estadoCivil){
			case"viudo":
			if(edad>17){
				viudosMayores=viudosMayores+1;
			}
			if (sexo=="m") {
				noCasados++;
			}
			break;
			case "soltero":
			if (sexo=="m") {
				solteros++;
				acumuladorEdad=acumuladorEdad+edad;
				noCasados++;
			}
			break;
			default:
		}
		if (edad>60) {
			if(temperaturaCorporal>38){
				temperaturaAlta++
			}
		}
		promedioSolteros=acumuladorEdad/solteros;

		respuesta=prompt("Desea ingresar los datos de otro pasajero: si/no");
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");



	document.write(nombre+" con "+maxTemperatura+"°C es la persona con mayor temperatura.<br>");
	document.write(viudosMayores+" es la cantidad de viudos mayores de edad.<br>");
	document.write(noCasados+" es la cantidad de pasajeros hombres solteros/viudos.<br>");
	document.write(temperaturaAlta+ " es la cantidad de mayores de edad con temperatura alta.<br>")
	document.write(promedioSolteros+ " es el promedio de edad entre hombres solteros.<br>")

}

