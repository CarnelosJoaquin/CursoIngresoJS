/*Parcial 2019 Ej 9, Carnelos Duarte Joaquín Alejo*/
/*
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
(pais=tunes;habitantes = 10; t =1 )
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
(pais=china;habitantes = 2000; t =-12 )*/
function mostrar()
{
	let pais;
	let paisPocaGente;
	let paisFrio;
	let MillonesHabitantes;
	let acumuladorHabitantes=0;
	let promedioGente;
	let temperatura;
	let temperaturasPares=0;
	let temperaturaCalor=0;
	let temperaturaFrio=0
	let respuesta;
	let bandera=0;
	let bandera2=0;
	let cantidad=0;


	do{
		pais =prompt("Ingrese un país");
		MillonesHabitantes=parseInt(prompt("Ingrese cantidad de millones de habitantes entre 1 y 7000 inclusives."));
		while(isNaN(MillonesHabitantes)||(MillonesHabitantes<1||MillonesHabitantes>7000)){
			MillonesHabitantes=parseInt(prompt("Por favor, ingrese cantidad de millones de habitantes entre 1 y 7000 inclusives."));
		}
		temperatura=parseInt(prompt("Ingrese una temperatura entre -50°C y 50°C inclusives."));
		while(isNaN(temperatura)||(temperatura>51||temperatura<-51)){
			temperatura=(prompt("Por favor, ingrese una temperatura entre -50°C y 50°C inclusives."));
		}
		if (temperatura%2==0) {
			temperaturasPares++;
		}
		if(pais<paisPocaGente||bandera==0){
			paisPocaGente=pais;
			bandera=1;
		}
		if (temperatura>40) {
			temperaturaCalor++;
		}
		if(temperatura<temperaturaFrio||bandera2==0){
			temperaturaFrio=temperatura;
			paisFrio=pais;
			bandera2=1;
		}
		cantidad++;
		acumuladorHabitantes=acumuladorHabitantes+MillonesHabitantes;
		promedioGente= Math.round(acumuladorHabitantes/cantidad);

		respuesta=prompt("Desea ingresar los datos de otro país: si/no");
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");

	document.write("La cantidad de temperaturas pares es "+temperaturasPares+".<br>");
	document.write("El nombre del país con menos habitantes es "+paisPocaGente+".<br>");
	document.write("La cantidad de paises que superan los 40 grados es "+temperaturaCalor+".<br>");
	document.write("El promedio de habitantes entre los paises ingresados es de "+promedioGente+"millones de habitantes.<br>");
	document.write("La temperatura mínima ingresada es "+ temperaturaFrio+"°C y el pais que registro esa temperatura es " +paisFrio+"<br>");
}