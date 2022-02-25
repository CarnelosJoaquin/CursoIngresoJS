/*
For 5; Carnelos Duarte Joaquin Alejo */
/*Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/
function mostrar()
{
	let i;
	let numero;

	for(;;){
		numero= parseInt(prompt("Ingrese un número"))
		if(numero==9){
			break;
		}
	}
}