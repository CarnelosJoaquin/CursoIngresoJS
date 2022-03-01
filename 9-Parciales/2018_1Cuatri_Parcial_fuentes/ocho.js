/*Parcial 2018 Ej 8, Carnelos Duarte Joaquín Alejo */
/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos,
una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/
function mostrar()
{
	let letra;
	let numero;
	let respuesta;
	let pares =0;
	let impares=0
	let ceros=0;
	let positivos=0;
	let promedioPositivos=0;
	let acumuladorPositivos=0;
	let acumuladorNegativos=0;
	let bandera=0;
	let numeroMayor=0;
	let numeroMenor=0;
	let letraMayor;
	let letraMenor;

	do{
		letra =(prompt("Ingrese una letra:")).charAt(0);/*busque en internet la funcion "charAt() que me da la primer letra de una palabra"*/
		while(!(isNaN(letra)))
		{
			letra =(prompt("Por favor, ingrese una letra:")).charAt(0);
		}
		numero=parseInt(prompt("Ingrese un número entre -100 y 100 inclusives."));
		while(isNaN(numero)||(numero>101||numero<-101)){
			numero=(prompt("Por favor, ingrese un número entre -100 y 100 inclusives."));
			
		}
		
		if(numero%2==0){
			pares++;
		}
		else{
			impares++;
		}
		
		if (numero>=0) {
			acumuladorPositivos= acumuladorPositivos+numero;
			positivos++;
			promedioPositivos=Math.round(acumuladorPositivos/positivos);
			if(numero==0){
				ceros++;
			}
		}
		else{
			acumuladorNegativos= acumuladorNegativos+numero;
		}
		if(numero>numeroMayor||bandera==0){
			numeroMayor=numero;
			letraMayor=letra;
		}
		if(numero<numeroMenor||bandera==0){
			numeroMenor=numero;
			letraMenor=letra;
			bandera=1;
		}
		respuesta=prompt("Desea ingresar los datos de otro usuario: si/no");
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");
		
	document.write("La cantidad de numeros pares es "+pares+".<br>");
	document.write("La cantidad de numeros impares es "+impares+".<br>");
	document.write("La cantidad de ceros es "+ceros+".<br>");
	document.write("El promedio de todos los positivos es "+promedioPositivos+".<br>");
	document.write("La suma de los numeros negativos es "+acumuladorNegativos+".<br>");
	document.write("La letra y el número del mínimo es "+letraMenor+" ; "+numeroMenor+".<br>");
	document.write("La letra y el número del mayor es "+letraMayor+" ; "+numeroMayor+".<br>");
}