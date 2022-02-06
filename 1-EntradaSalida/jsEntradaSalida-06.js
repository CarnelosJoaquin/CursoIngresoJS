/*
Ejercio 6 ; Carnelos Duarte Joaquin Alejo */
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let mensajeAMostrar;
	let numeroparciado1;
	let numeroparciado2;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numeroparciado1 = parseInt(numero1);
	numeroparciado2 = parseInt(numero2);

	mensajeAMostrar = "La suma es " +(numeroparciado1 + numeroparciado2);

	alert(mensajeAMostrar)
}
