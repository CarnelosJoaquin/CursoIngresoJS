/*
While 8; Carnelos Duarte Joaquin Alejo */
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar(){
	let numero=0;
	let positivo=0;
	let acumulador=0;
	let contador=0;
	let respuesta="si";

	do{
		numero = parseFloat(prompt("Ingrese un número:"));
		respuesta = prompt("¿Quiere añadir otro número? Si/No");		
		if(numero>=0){
			positivo = positivo + numero;
		}else{
			acumulador = acumulador+1;
			acumulador = acumulador*numero;
		}
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí")

	document.getElementById('txtIdSuma').value=positivo;
	document.getElementById('txtIdProducto').value=acumulador;
}