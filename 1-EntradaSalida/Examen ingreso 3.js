/*3er ejercicio examen de curso de ingreso,Carnelos Duarte Joaquín Alejo*/

/*3)Nos ingresan una cantidad indeterminada de estadías de vacaciones, validando los datos ingresados:
nombre del pasajero titular,
destino ( “Brasil”, “Caribe” o “Europa”),
temporada(“alta”,”baja”,“media”),
cantidad de pasajeros que viajan.

informar:

a)el destino mas elegido.

b)el nombre del pasajero titular que lleva menos pasajeros.

c)el promedio de personas, que viajan en temporada alta.*/



function mostrar(){
	let nombreTitular;
	let destino;
	let temporada;
	let cantidadPasajeros;
	let respuesta;
	let menosPasajeros=0;
	let bandera=0;
	let nombreMenosPasajeros;
	let cantAlta=0;
	let promedioTempAlta;
	let acumuladorPasajerosAlta=0;
	let acumuladorPasajerosDefault=0;
	let destinoBrasil=0;
	let destinoCaribe=0;
	let destinoEuropa=0;
	let destinoMayor;

	
	do{
		nombreTitular=prompt("Ingrese nombre del pasajero titular:");
		while(!(isNaN(nombreTitular))){
			nombreTitular=prompt("Por favor, Ingrese nombre del pasajero titular:");
		}
		destino=prompt("Ingrese destino: Brasil/Caribe/Europa");
		while(!(destino=="Brasil"||destino=="Caribe"||destino=="Europa")){
			destino=prompt("Por favor, Ingrese destino: Brasil/Caribe/Europa");
		}
		temporada=prompt("Ingrese temporada: alta/baja/media");
		while(!(temporada=="alta"||temporada=="baja"||temporada=="media")){
			temporada=prompt("Por favor, Ingrese temporada: alta/baja/media");
		}
		cantidadPasajeros=parseInt(prompt("Ingrese la cantidad de cantidad de pasajeros que viajan"));
		while(isNaN(cantidadPasajeros)||cantidadPasajeros<1){
    		cantidadPasajeros=parseInt(prompt("Por favor, Ingrese la cantidad de cantidad de pasajeros que viajan"));
    	}	
		respuesta=prompt("Desea ingresar otra estadía de vacaciones: si/no");
		if(cantidadPasajeros<menosPasajeros||bandera==0){
			menosPasajeros=cantidadPasajeros;
			nombreMenosPasajeros=nombreTitular;
			bandera=1;
		}
		switch(temporada){
			case"alta":
			cantAlta++;
			acumuladorPasajerosAlta=acumuladorPasajerosAlta+cantidadPasajeros;
			break;
			default:
		}
		switch(destino){
			case"Brasil":
			destinoBrasil++;
			break;
			case"Caribe":
			destinoCaribe++;
			break;
			case"Europa":
			destinoEuropa++;
			break;
		}
		if(destinoBrasil>destinoEuropa&&destinoCaribe){
			destinoMayor="Brasil";
		}
			else if(destinoEuropa>destinoCaribe){
				destinoMayor="Europa";
			}
				else{
					destinoMayor="Caribe";
				}
		promedioTempAlta=acumuladorPasajerosAlta/cantAlta;
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");

	document.write("El destino mas elegido es "+destinoMayor+".<br>");
	document.write("El nombre del pasajero titular que lleva menos personas es "+nombreMenosPasajeros+".<br>");
	document.write("El promedio de gente que viaja en temporada alta es "+promedioTempAlta+".<br>");

}