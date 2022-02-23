/*
While 10; Carnelos Duarte Joaquin Alejo */
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). */

function mostrar()
{
	//declarar contadores y variables 
	
	let numero;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantNegativos=0;
	let cantPositivos=0;
	let cantCeros=0;
	let cantPares=0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	let respuesta;

	do{
		numero= parseFloat(prompt("Ingrese un número:"));
		while (isNaN(numero)){
			numero = parseFloat(prompt("Por favor,Ingrese solo numeros:"));
		}
		if(numero>0){
			sumaPositivos=sumaPositivos+numero;
			cantPositivos=cantPositivos+1;
		}		
		else if(numero<0){
			sumaNegativos=sumaNegativos+numero;
			cantNegativos= cantNegativos+ 1;
		}
		else{
			cantCeros = cantCeros+1;
		}
		if(numero%2==0){
			cantPares=cantPares+1;
		}
		respuesta = prompt("¿Quiere añadir otro número? Si/No");
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");

	if (cantPositivos!=0) {
		promedioPositivos = sumaPositivos/cantPositivos;
	}
	if (cantNegativos!=0) {
		promedioNegativos = sumaNegativos/cantNegativos;
	}

	diferencia = sumaPositivos+sumaNegativos;

	document.write("La suma de los negativos es "+ sumaNegativos+".<br>");
	document.write("La suma de los positivos es "+ sumaPositivos+".<br>");
	document.write("La cantidad de los positivos es "+ cantPositivos+".<br>");
	document.write("La cantidad de los negativos es "+ cantNegativos+".<br>");
	document.write("La cantidad de los ceros es "+ cantCeros+".<br>");
	document.write("La cantidad de los pares es "+ cantPares+".<br>");
	document.write("El promedio de positivos es "+ promedioPositivos+".<br>");
	document.write("El promedio de negativos es "+ promedioNegativos+".<br>");
	document.write("La diferencia entre positivos y negativos es "+ diferencia+".<br>");
}