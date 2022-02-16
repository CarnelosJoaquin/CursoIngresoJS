/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let Fahrenheit;
	let Centigrados;
	let resultado;

	Fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);
	Centigrados = (Fahrenheit -32)*5/9;
	resultado = Centigrados.toFixed(2);

	alert(Fahrenheit + " grados Fahrenheit son " + resultado + " grados Centigrados.");
}
function CentigradosFahrenheit () 
{
	let Fahrenheit;
	let Centigrados;

	Centigrados = parseInt(document.getElementById("txtIdTemperatura").value);
	Fahrenheit = (Centigrados*9/5)+32;
	resultado = Fahrenheit.toFixed(2);


	alert(Centigrados + " grados Centigrados son " + Fahrenheit + " grados celcius.");
}
