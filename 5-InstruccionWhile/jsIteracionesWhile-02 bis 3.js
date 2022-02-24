/*
While 2 bis 3; Carnelos Duarte Joaquin Alejo *//*
En WHILE 2. Pedir nombre y temperatura hasta que el usuario quiera, mostrar mensaje:
" Usted se llama XXX y tiene la temperatura (NORMAL, BAJA, ALTA DEBE AISLARSE)
"(VALIDAR que sean numeros y los rangos de las temperaturas)..*/
function mostrar()
{		
	let nombre;
	let numero;
	let respuesta;
	let temperatura;

	do{
		nombre= prompt("Ingrese nombre");
		numero= parseInt(prompt("Ingrese temperatura en °C:"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Por favor,Ingrese solo temperatura en °C:"));
		}
		if(numero<=36){
			temperatura = "Baja";
		}
		else if(numero>=38)
			temperatura = "Alta debe aislarse";
		else{
			temperatura = "Normal";
		}
		respuesta = prompt("¿Quiere añadir los datos de otra persona? Si/No");	
		console.log("Usted se llama "+nombre+" tiene la temperatura "+ temperatura+".");
	}
	while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");
}