/*
IF 1  bis ; Carnelos Duarte Joaquin Alejo */
/*
En el IF 1. Pedir a una persona que fue de vacaciones, la distancia que viajo
y el tiempo que tardo, para calcular la velocidad e informar:
60 km/h = muy lento; Hasta 80km/h= lento; Hasta 100 = buen ritmo;
Hasta 100 = buen ritmo; Hasta 120 = ahí de la ley; Más = eso no se hace >121*/
function mostrar()
{
	
	let distancia= parseInt(prompt("Ingrese distancia"));
	let tiempo = parseInt(prompt("Ingrese horas de viaje"));
	let velocidad = distancia/tiempo


	if(velocidad <= 60){
		alert ("muy lento");
	}

	else if(velocidad <= 80){
		alert ("lento");
	}
	else if (velocidad <=100){
		alert("buen ritmo");
	}
	else if (velocidad <=120){
		alert("ahí de la ley")
	}
	else{
		alert("eso no se hace")
	}
}