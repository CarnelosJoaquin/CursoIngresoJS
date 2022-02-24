/*
While 10 bis1; Carnelos Duarte Joaquin Alejo */
/*
En WHILE 10. La universidad le pide ingresar: edad y nombre de los alumnos, 
informar el nombre de la persona más vieja y la más joven por document.write
(Validar que sean números y rango de edad). */

function mostrar()
{
	//declarar contadores y variables 
	

	let nombre;
	let numero;
	let respuesta;
	let bandera=0
	let edadMaxima=0;
	let edadMinima=0;
	let joven;
	let mayor;

	do{
		nombre= prompt("Ingrese nombre real del alumno");
		numero= parseInt(prompt("Ingrese edad del alumno:"));
		while (numero>80||numero<17||isNaN(numero)){
			numero = parseInt(prompt("Ingrese edad real del alumno:"));
		}
		if(numero>=edadMaxima||bandera==0){
			edadMaxima = numero;
			mayor =nombre;
		}
		if(numero<=edadMinima||bandera==0){
			edadMinima = numero;
			bandera=1;
			joven= nombre
		}
		respuesta = prompt("¿Quiere añadir los datos de otro alumno? Si/No");

	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");
		document.write(mayor+" es la persona mas vieja con "+ edadMaxima+".<br>");
		document.write(joven+" es la persona mas joven con "+ edadMinima+".<br>");
}