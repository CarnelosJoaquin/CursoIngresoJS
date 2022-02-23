/*
While 7; Carnelos Duarte Joaquin Alejo */
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar(){
	let numero;
	let acumulador=0;
	let contador=0;
	let respuesta="si";

	while(respuesta=="si"||respuesta =="sí"||respuesta =="Si"||respuesta=="Sí"){
		numero=parseInt(prompt("Ingrese un numero"));
		acumulador=acumulador+numero;
		contador= contador+1;
		respuesta=prompt("Quiere seguir? 'si' o 'no'");
	}
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}
