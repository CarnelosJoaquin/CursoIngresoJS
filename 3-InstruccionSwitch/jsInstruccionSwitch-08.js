/*
Switch 8; Carnelos Duarte Joaquin Alejo */
/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
		alert("En este lugar hace frío.");
		break;
		case "Cataratas":
		case "Mar del plata":
		alert("En este lugar hace calor.")
		break;
	}
}