/*
IF 5 ; Carnelos Duarte Joaquin Alejo */
/*
Al ingresar una edad solo debemos informar si la persona NO es adolescente. .*/
function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad<13 || edad>17){
		alert("No es adolescente");
	}
}