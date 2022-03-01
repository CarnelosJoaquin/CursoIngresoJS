/*
For 5 bis2; Carnelos Duarte Joaquin Alejo */
/*Enunciado:
En FOR 5, Realizar el programa que permita el ingreso de 5 botellas de gaseosa,
con marca, los cm3(validar: 1-250, 2- 500, 3-1500, 4-2000) ,
tipo de marca validar(“Marca Líder”, “Otra”),
precio(validar entre 100 y 500) 
e informar por alert: 
a) El promedio de precio de marca líder en 500cm3 y la cantidad. 
b) La botella más barata y su precio.
c) La cantidad de tipo otra.
*/
function mostrar()
{
	let i;
	let marca;
	let cantidadOtra=0;
	let cm3;
	let cantidad=0;
	let cantidadLider;
	let cantidad500Lider=0;
	let precio;
	let barata;
	let precioBajo=0;
	let precio500Lider=0;
	let promedio=0;
	let bandera=0

	for(i=0;i<=4;i++){
		marca=prompt("Ingrese tipo de marca: Líder/Otra");
			cm3=parseInt(prompt("Ingrese tamaño de la gaseosa en cm3: 250/500/1500/2000"));
			while(!(cm3==250||cm3==500||cm3==1500||cm3==2000)){
				cm3=parseInt(prompt("Por favor, ingrese tamaño de la gaseosa en cm3: 250/500/1500/2000"));
			}
			precio=parseInt(prompt("Ingrese precio entre 100 y 500 incluidos."));
			while(isNaN(precio)||precio<100||precio>500){
				precio=parseInt(prompt("Por favor, ingrese precio entre 100 y 500 incluidos."));
			}
		while(!(marca=="Líder"||marca=="Otra")){
			marca=prompt("Por favor, ingrese tipo de marca: Líder/otra");
		}
		switch(marca){
			case"Líder":
			if(cm3==500){
				cantidad500Lider++;
				precio500Lider=precio500Lider+ precio;
			}
			break;
			case"Otra":
			cantidadOtra++;
			break;
		}
		if(!(precio>=precioBajo)||bandera==0){
			precioBajo=precio;
			barata = marca;
			bandera=1;
		}
	}
	promedio= precio500Lider/cantidad500Lider

	if(cantidad500Lider!=0){
	alert("El promedio de precio de marca líder de 500cm3 es "+promedio+"$ y la cantidad es "+cantidad500Lider+".");
	}
	else{
		alert("No hay botellas líder de 500cm3.<br>")
	}
	alert("La botella mas barata es de marca es "+barata+" y su precio es "+precioBajo+".");
	alert("La cantidad de botellas tipo otra es "+cantidadOtra+".");
}