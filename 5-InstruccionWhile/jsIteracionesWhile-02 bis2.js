/*
While 2 Bis2; Carnelos Duarte Joaquin Alejo */
/*
En WHILE 2. Pedir Números al usuario hasta que él quiera,
contar los números que son menores a – 15 y mayores a 100
(inclusive ambos casos)(VALIDAR). Mostrar por console.log:
a) el promedio de los números que cumplen la condición 
b) cantidad de números positivos 
c) cantidad de números negativos
d) cantidad de números impares..*/
function mostrar()
{
	let numero;
	let promedio=0;
	let cantRango=0;
	let cantImpares=0;
	let contador=0;
	let cantPositivos=0;
	let cantNegativos=0;

	do{
		numero = parseInt(prompt("Ingrese un número"));
		while (isNaN(numero)){
			numero = parseInt(prompt("Por favor,Ingrese solo numeros:"));
		}

		if(numero%2!=0){
			cantImpares++;
		}
		if(numero<0){
			if(numero<-15){
				cantRango++;
			}	
			contador++;
			cantNegativos++;
		}
		else{
			if(numero>100){
				cantRango++;
			}
			cantPositivos++;
			contador++;
		}

		respuesta = prompt("¿Quiere añadir otro número? Si/No");
	}
	while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");
	promedio= cantRango/contador*100;
	
	console.log("El promedio de numeros menores de -15 y mayores de 100 fue de "+ promedio+"%.");
	console.log("La cantidad de numeros positivos es de "+ cantPositivos+".");
	console.log("La cantidad de numeros negativos es de "+ cantNegativos+".");
	console.log("La cantidad de numeros impares es de "+ cantImpares+".");
}