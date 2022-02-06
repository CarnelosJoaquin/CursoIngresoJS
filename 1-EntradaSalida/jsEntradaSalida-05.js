/*
Ejercio 5 ; Carnelos Duarte Joaquin Alejo */
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	let edadIngresada;
	let mensajeAMostrar;
	
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;
	mensajeAMostrar = "Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años";

	alert(mensajeAMostrar);
}

