/*
TP 2 ; Carnelos Duarte Joaquin Alejo */

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largoTerreno;
	let anchoTerreno;
	let alambre;

	largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
	anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
	alambre = (largoTerreno + anchoTerreno)*6;

	alert("Se deben comprar "+alambre+" metros de hilo de alambre.");

}
function Circulo () 
{

	let radioTerreno;
	let alambre;

	radioTerreno = parseFloat(document.getElementById("txtIdRadio").value);
	alambre = (2*Math.PI.toFixed(2)*radioTerreno)*3;

	alert("Se deben comprar "+alambre+" metros de hilo de alambre.");

}
function Materiales () 
{
	let largoTerreno;
	let anchoTerreno;
	let cemento;
	let cal;
	let mensaje

	largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
	anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
	cemento = (largoTerreno * anchoTerreno)*2;
	cal = (largoTerreno * anchoTerreno)*3;

	alert("Se deben comprar "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");
}