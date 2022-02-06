/*
Ejercio 8 ; Carnelos Duarte Joaquin Alejo */
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let Dividendo;
	let Divisor;
	let mensajeAMostrar;

	Dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	Divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	mensajeAMostrar = "El resto es 0." + (Dividendo%Divisor);
	alert(mensajeAMostrar);
} 