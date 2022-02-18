/*
While 4; Carnelos Duarte Joaquin Alejo */
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));

	while(!(numeroIngresado>=0 && numeroIngresado<=9)){
		alert("N° incorrecto.");
		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	}
	document.getElementById('txtIdNumero').value= numeroIngresado;
}