/*
IF 1  bis2 ; Carnelos Duarte Joaquin Alejo */
/*
En el IF 1. ingresar el nombre y los datos requeridos para calcular el IMC, e informar a la persona si es: 
Bajo peso <18.5; Peso normal 18,5-24.9; Pre Obesidad 25-26.9; Obesidad I 27-29.9; Obesidad II 30-34.9; Obesidad III >40*/
function mostrar()
{
	
	let nombre = prompt("Ingrese nombre");
	let peso = parseFloat(prompt("Ingrese peso en kg"));
	let altura = parseFloat(prompt("Ingrese altura en mts"));
	let imc = peso/(altura*altura);
	let mensaje;


	if(imc < 18.5){
		mensaje = nombre + " usted tiene bajo peso";
	}
	else if(imc <= 24.9){
		mensaje = nombre + " usted tiene peso normal";
	}
	else if(imc <= 26.9){
		mensaje = nombre + " usted tiene Pre Obesidad";
	}
	else if(imc <= 29.9){
		mensaje = nombre + " usted tiene Obesidad I";
	}
	else if(imc <= 34.9){
		mensaje = nombre + " usted tiene Obesidad II";
	}
	else if (imc < 40){	
		mensaje = nombre + " usted tiene Obesidad III";
	}
	else{
		mensaje ="ingrese peso real";
	}

	alert(mensaje);

}