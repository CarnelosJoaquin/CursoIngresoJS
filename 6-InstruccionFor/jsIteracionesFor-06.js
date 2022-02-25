/*
For 6; Carnelos Duarte Joaquin Alejo */
/*Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares
desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/
function mostrar()
{
	let numero;
	let pares=0;
	let i;

	numero=parseInt(prompt("Ingrese un número"));
	for(i=1;i<=numero;i++){
		if(i%2==0){
			pares++;
		}
	}
	alert("La cantidad de pares es "+pares);
}