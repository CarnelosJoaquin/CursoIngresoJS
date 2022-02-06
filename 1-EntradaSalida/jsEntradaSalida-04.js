/*
Ejercio 4 ; Carnelos Duarte Joaquin Alejo */
/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
    nombre = prompt("Ingresar Nombre");
	document.getElementById("txtIdNombre").value = nombre
}