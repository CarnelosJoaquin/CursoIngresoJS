/*
TP 1 ; Carnelos Duarte Joaquin Alejo */

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let producto1;
	let producto2;
	let producto3;
	let Suma;
	let texto;
	let resultado;

	producto1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	producto2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	producto3 = parseInt(document.getElementById("txtIdPrecioTres").value);

	Suma = producto1 + producto2 + producto3;
	texto = "El precio de la suma de productos es ";
	resultado = texto + Suma

	alert(resultado);
}

function Promedio () 
{	
	let producto1;
	let producto2;
	let producto3;
	let Promedio;
	let texto;
	let resultado

	producto1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	producto2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	producto3 = parseInt(document.getElementById("txtIdPrecioTres").value);

	Promedio = (producto1 + producto2 + producto3) / 3;
	texto = "El precio promedio de los productos es ";
	resultado = texto + Promedio

	alert(resultado);
	
}
function PrecioFinal () 
{
	let producto1;
	let producto2;
	let producto3;
	let resultadoSuma;
	let iva;
	let PrecioFinal;
	let texto;
	let resultado

	producto1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	producto2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	producto3 = parseInt(document.getElementById("txtIdPrecioTres").value);

	resultadoSuma = producto1 + producto2 + producto3;
	iva = resultadoSuma*21/100;
	PrecioFinal = resultadoSuma + iva;

	texto = "El precio final de los productos mas el IVA es ";
	resultado = texto + PrecioFinal

	alert(resultado);
}