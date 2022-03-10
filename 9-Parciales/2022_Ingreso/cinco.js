/*Simulacro 5, Carnelos Duarte Joaquín Alejo*/
/*
Debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, 
de cada persona debemos obtener los siguientes datos:
Nombre (validar que no sea número)
Obra Social ("PAMI", "OSDE" o "otras"),
Edad(solo mayores de edad, más de 17),
Temperatura corporal(validar por favor) Sexo (validar femenino, masculino, no binario)
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de más de 60 años.
b) el nombre y temperatura de la mujer PAMI más joven.
c) cuanto sale el viaje total sin descuento.
d) si hay más del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, 
que solo mostramos si corresponde.
*/

function mostrar()
{
	let nombre;
	let obraSocial
	let edad;
	let temperaturaCorporal;
	let respuesta;
	let genteOsde60=0;
	let contadorMujerPami=0;
	let jovenPami=0
	let nombreJovenPami;
	let bandera=0
	let precioDescuento;
	let genteOsde=0;
	let gentePami=0;
	let genteOtras=0;
	let promedio;
	let precio;

	do{
		nombre=prompt("Ingrese nombre del cliente.");
    	while(!(isNaN(nombre))){
    		nombre=prompt("¨Por favor, Ingrese nombre real del cliente.");
    	}
    	obraSocial=prompt("Ingrese obra social: PAMI/OSDE/otras");
    	while(!(obraSocial=="PAMI"||obraSocial=="OSDE"||obraSocial=="otras")){
    		obraSocial=prompt("Ingrese obra social: PAMI/OSDE/otras");
    	}
    	edad=parseInt(prompt("Ingrese años de edad(18 o más)."));
    	while(edad>95||edad<18||isNaN(edad)){
      		edad=(prompt("Por favor,Ingrese años de edad del cliente(18 o más)."));
   		}
   		temperaturaCorporal=parseFloat(prompt("Ingrese temperaturaCorporal en °C"));
		while(isNaN(temperaturaCorporal)||(temperaturaCorporal<35||temperaturaCorporal>45)){
			temperaturaCorporal=parseFloat(prompt("Por favor, ingrese una temperatura real en °C"));
		}
		sexo=prompt("Ingrese sexo: femenino/masculino/no binario");
    	while(!(sexo=="femenino"||sexo=="masculino"||sexo=="no binario")){
      		sexo=prompt("Por favor,Ingrese sexo: femenino/masculino/no binario");
    	}
		switch(obraSocial){
			case"OSDE":
			genteOsde++;
			if (edad>60) {
				genteOsde60++;
			}
			break;
			case"PAMI":
			gentePami++;
			if(sexo=="femenino"){
				contadorMujerPami++;
				if (edad<jovenPami||bandera==0) {
					bandera=1;
					jovenPami=edad;
					nombreJovenPami=nombre;

				}
			break;
			}
			default:
			genteOtras++;
		}
		respuesta=prompt("Desea ingresar los datos de otra persona: si/no");
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");

	promedio=gentePami/(gentePami+genteOsde+genteOtras)*100;
	precio=(gentePami+genteOsde+genteOtras)*600;
	precioDescuento=precio*0.75;

	if(genteOsde60!=0){
		document.write("La cantidad de gente mayor de 60 años de OSDE es "+genteOsde60+".<br>");
	}
	if(contadorMujerPami!=0){
		document.write("La mujer mas joven de PAMI se llama "+nombreJovenPami+" y tiene "+jovenPami+" años de edad.<br>");
	}
	if(promedio>=50){
		document.write("El precio del viaje es "+precioDescuento+"$ pesos.<br>");
	}
	else{
		document.write("El precio del viaje es "+precio+"$ pesos.<br>");
	}
	
}
