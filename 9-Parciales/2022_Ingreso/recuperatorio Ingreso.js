/*1er ejercicio recuperatorio de curso de ingreso,Carnelos Duarte Joaquín Alejo*/

/*1)De un cine se deben ingresar una cantidad indeterminada de venta de entradas diaria, validando los siguientes datos:

nombre de película, precio, cantidad de entradas, tipo(3D o 4D)

a)el nombre de la película más cara de tipo 4D.

b)informar el precio total de la venta del día.

c)el nombre de la película con menos cantidad de entradas.*/
function mostrar(){
	let nombre;
	let precio;
	let cantidadEntradas;
	let tipo;
	let respuesta;

	let precioCaro4d=0;
	let nombrePrecioCaro4d;
	let cantidadTipo4d=0;

	let acumuladorPrecio=0;

	let menosEntradas;
	let bandera=0;
	let nombreMenosEntradas;



	do{
		nombre=prompt("Ingrsee nombre de la pelicula:");
		while(isNaN(nombre)==false){
			nombre=prompt("Por favor, Ingrese  de la pelicula:");
		}
		
    	cantidadEntradas=parseInt(prompt("Ingrese cantidad de entradas(de 1 - 2000)"));
		while(isNaN(cantidadEntradas)==true||cantidadEntradas<1||cantidadEntradas>2000){
    		cantidadEntradas=parseInt(prompt("Por favor, Ingrese cantidad de entradas(de 1 - 2000)"));
    	}
    	precio=parseInt(prompt("Ingrese precio de la pelicula(de 100 - 2000)"));
		while(isNaN(precio)==true||precio<100||precio>2000){
    		precio=parseInt(prompt("Por favor, Ingrese precio de la pelicula(de 100 - 2000)"));
    	}
    	tipo=prompt("Ingrese tipo: 3D/4D");
		while(!(tipo=="3D"||tipo=="4D")){
			tipo=prompt("Por favor, Ingrese tipo: 3D/4D");
		}
		
		/*A)*/
		if(tipo=="4D"&&precio>precioCaro4d){
			cantidadTipo4d++;
			precioCaro4d=precio;
			nombrePrecioCaro4d=nombre;
		}
		/*B)*/
		acumuladorPrecio=acumuladorPrecio+precio;

		/*C)*/
		if (cantidadEntradas<menosEntradas||bandera==0){
			menosEntradas=cantidadEntradas;
			nombreMenosEntradas=nombre;
			bandera=1
		}

		respuesta=prompt("Desea ingresar otra pelicula: si/no");
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");
	if (cantidadTipo4d!=0) {
		document.write("El nombre de la pelicula 4D mas cara es "+nombrePrecioCaro4d+".<br>");
	}
	else if (cantidadTipo4d==0){
		document.write("No hay peliculas tipo 4D para saber el nombre de la mas cara.<br>");
	}
	document.write("El precio total de las ventas del día es "+acumuladorPrecio+"$.<br>");
	document.write("El nombre de la pelicula con menos entradas vendidas es "+nombreMenosEntradas+".<br>");
}