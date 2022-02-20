/*
While 5; Carnelos Duarte Joaquin Alejo *//*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado = prompt("ingrese sexo: f ó m .");
	while(!(sexoIngresado=="f"||sexoIngresado=="F"||sexoIngresado=="m"||sexoIngresado=="M")){
		sexoIngresado = prompt("Error, ingrese sexo: f ó m .");
	}
	document.getElementById('txtIdSexo').value= sexoIngresado;
}