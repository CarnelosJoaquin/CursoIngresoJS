/*
While 6; Carnelos Duarte Joaquin Alejo */
/*
Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/
function mostrar()
{
	let contador=0;
	let acumulador=0;
	let numero=0;
	let promedio=0;
	let i=0;

	while(i<5){
		numero = parseInt(prompt("Ingrese un número"));
		acumulador = acumulador + numero;
		contador = contador+1;
		i=i+1;
	}
	document.getElementById("txtIdSuma") .value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;
}