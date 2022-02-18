/*
While 3; Carnelos Duarte Joaquin Alejo */
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750"){
		alert("La clave es incorrecta.");
		claveIngresada = prompt("Reingrese la clave");
	}
	alert("La clave "+ claveIngresada+" es correcta.")
}
