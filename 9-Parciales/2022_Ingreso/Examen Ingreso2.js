/*2do ejercicio examen de curso de ingreso,Carnelos Duarte Joaquín Alejo*/

/*2)De una compra debes ingresar una cantidad indeterminada de productos, validando los siguientes datos:

nombre de producto, precio, unidades, tipo(minorista o mayorista)

a)informar el precio total de la compra.

b)el nombre del producto más caro de tipo minorista

c)el nombre del producto con menos unidades*/
function mostrar(){
	let nombre;
	let precio;
	let unidades;
	let tipo;
	let respuesta;
	let acumPrecioFinal=0;
	let caroMinorista=0;
	let cantMinorista=0;
	let nombreCaroMinorista;
	let menosUnidades=0;
	let bandera=0;
	let nombreMenosUnidades;

	do{
		tipo=prompt("Ingrese tipo de producto: minorista/mayorista");
		while(!(tipo=="mayorista"||tipo=="minorista")){
			tipo=prompt("Por favor, Ingrese tipo de producto: minorista/mayorista");
		}
		nombre=prompt("Ingrsee nombre del producto:");
		while(isNaN(nombre)==false){
			nombre=prompt("Por favor, Ingrese nombre del producto:");
		}
		precio=parseInt(prompt("Ingrese precio del producto"));
		while(isNaN(precio)==true||precio<1){
    		precio=parseInt(prompt("Por favor, Ingrese precio del producto"));
    	}
		unidades=parseInt(prompt("Ingrese cantidad de unidades"));
		while(isNaN(unidades)==true||unidades<1){
    		unidades=parseInt(prompt("Por favor, Ingrese cantidad de unidades"));
    	}
    	acumPrecioFinal=acumPrecioFinal+precio;

    	if(tipo=="minorista"){
    		cantMinorista++;
    		if(precio>caroMinorista){
    			caroMinorista=precio;
    			nombreCaroMinorista=nombre;
    		}
    	}
    	if(unidades<menosUnidades||bandera==0){
    		menosUnidades=unidades;
    		nombreMenosUnidades=nombre;
    		bandera=1;
    	}

		respuesta=prompt("Desea ingresar la compra de otro producto: si/no");
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");
	document.write("El precio total de la compra es "+acumPrecioFinal+"$.<br>");
	if (cantMinorista!=0){
		document.write("El producto mas caro de los tipo minorista es "+nombreCaroMinorista+".<br>");
	}
	else if (cantMinorista==0) {
		document.write("No hay productos minoristas para saber cual es el mas caro");
	}
	document.write("El producto con menos unidades es "+nombreMenosUnidades+".<br>");
}