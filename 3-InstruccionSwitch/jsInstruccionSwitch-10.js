/*
Switch 10; Carnelos Duarte Joaquin Alejo */
/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/
function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino  = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				alert("Se viaja.");
			break;
			}
			else{
				alert("No se viaja.");
				break;
			}
		case "Verano":
				if(destino == "Mar del plata" || destino == "Cataratas"){
					alert("Se viaja.");
					break;
				}
				else{
					alert("No se viaja.");
					break;
				}
		case "Otoño":
			alert("Se viaja.");
			break;
		case "Primavera":
			if (destino != "Bariloche"){
				alert("Se viaja.")
				break;
			}
			else{
				alert("No se viaja.")
				break;
			}
		}
}