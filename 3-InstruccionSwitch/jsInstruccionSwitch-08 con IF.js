/*
Switch 8; Carnelos Duarte Joaquin Alejo */
/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	if (destino == "Bariloche" || destino == "Ushuaia"){
		alert("En este lugar hace frío.");
	}
	else{
		alert("En este lugar hace calor.");
	}		
}