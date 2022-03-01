/*Parcial 2018 Ej 9, Carnelos Duarte Joaquín Alejo */
/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )*/

function mostrar()
{
	let marca;
	let marcaPesada;
	let marcaLiviana;
	let peso;
	let pesoPesado=0;
	let pesoLiviano=0;
	let pesoAcumulado=0;
	let promedioPeso;
	let temperatura;
	let temperaturasPares=0;
	let temperaturaNegativa=0;
	let respuesta;
	let bandera=0
	let cantidad=0


	do{
		marca =(prompt("Ingrese una marca: pepito/teem/llut/fpy"))
		while(!(marca=="pepito"||marca=="teem"||marca=="llut"||marca=="fpy")){
			marca =prompt("Por favor, ingrese una marca: pepito/teem/llut/fpy");
		}
		peso=parseInt(prompt("Ingrese un peso entre 1 y 100 kg inclusives."));
		while(isNaN(peso)||(peso>101||peso<1)){
			peso=(prompt("Por favor, ingrese un peso entre 1 y 100 kg inclusives."));
		}
		temperatura=parseInt(prompt("Ingrese una temperatura entre -30°C y 30°C inclusives."));
		while(isNaN(temperatura)||(temperatura>31||temperatura<-31)){
			temperatura=(prompt("Por favor, ingrese una temperatura entre -30°C y 30°C inclusives."));
		}
		if (temperatura%2==0) {
			temperaturasPares++;
		}
		if(peso>pesoPesado||bandera==0){
			pesoPesado=peso;
			marcaPesada=marca;
		}
		if(peso<pesoLiviano||bandera==0){
			pesoLiviano=peso;
			bandera=1;
		}
		if (temperatura<0) {
			temperaturaNegativa++;
		}
		cantidad++;
		pesoAcumulado=pesoAcumulado+peso;
		promedioPeso= Math.round(pesoAcumulado/cantidad);
		respuesta=prompt("Desea ingresar los datos de otro producto: si/no");
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");
	document.write("La cantidad de temperaturas pares es "+temperaturasPares+".<br>");
	document.write("La marca del producto mas pesado es "+marcaPesada+".<br>");
	document.write("La cantidad de productos con temperatura menor a 0°C es "+temperaturaNegativa+".<br>");
	document.write("El promedio del peso de todos los productos "+promedioPeso+"kg.<br>");
	document.write("El peso máximo fue "+pesoPesado+"kg y el peso mínimo fue " +pesoLiviano+"kg.<br>");

}

