/*Parcial 2020 Ej1; Carnelos Duarte Joaquin Alejo*/
/*Enunciado:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	let producto;
	let maxProducto;
	let precio;
	let maxPrecio=0;
	let menorPrecioAlcohol=0;
	let menorUnidadesAlcohol=0;
	let menorFabricanteAlcohol=0;
	let cantidad;
	let cantidadTotal=0;
	let cantidadMax=0;
	let promedio;
	let marca;
	let fabricante;
	let i=0;
	let respuesta="si";
	let acumuladorJabon=0;


		do{
			producto =prompt("Ingrese uno de los siguientes productos: barbijo/jabón/alcohol/guantes/trapo");
			while(!(producto=="barbijo"||producto=="jabón"||producto=="alcohol"||producto=="guantes"||producto=="trapo")){
				producto =prompt("Por favor,Ingrese uno de los siguientes productos: barbijo/jabón/alcohol/guantes/trapo");
			}
			precio=parseInt(prompt("Ingrese precio entre 100 y 300"));
			while(isNaN(precio)||precio<100||precio>300){
				precio= prompt("Por favor, ingrese un precio entre el rango de 100 y 300.");
			}
			cantidad= parseInt(prompt("Ingrese cantidad de unidades entre 1 y 1000"));
			while(isNaN(cantidad)||!(cantidad>0&&cantidad<1001)){
				cantidad= parseInt(prompt("Por favor, ingrese cantidad de unidades entre 1 y 1000"));
			}
			marca=prompt("Ingrese la marca correspondiente: marca1/marca2/marca3/marca4/marca5 ");
			while(!(marca=="marca1"||marca=="marca2"||marca=="marca3"||marca=="marca4"||marca=="marca5")){
				producto =prompt("Por favor,Ingrese la marca correspondiente: marca1/marca2/marca3/marca4/marca5");
			}
			fabricante=prompt("Ingrese el fabricante correspondiente: fabricante1/fabricante2/fabricante3/fabricante4/fabricante5 ");
			while(!(fabricante=="fabricante1"||fabricante=="fabricante2"||fabricante=="fabricante3"||fabricante=="fabricante4"||fabricante=="fabricante5")){
			producto =prompt("Por favor,Ingrese el fabricante correspondiente: fabricante1/fabricante2/fabricante3/fabricante4/fabricante5");
			}
			if(cantidad>cantidadMax){
				cantidadMax=cantidad;
				maxProducto=producto;
				maxPrecio=precio;
			}
			switch(producto){
				case"alcohol":
				if(precio>menorPrecioAlcohol){
					menorPrecioAlcohol=precio;
					menorUnidadesAlcohol=cantidad;
					menorFabricanteAlcohol=fabricante;}
				cantidadTotal=cantidadTotal+cantidad;
				break;
				case"jabón":
				acumuladorJabon=acumuladorJabon+cantidad;
				cantidadTotal=cantidadTotal+cantidad;
				break;
				default:
				cantidadTotal=cantidadTotal+cantidad;
			}
			respuesta = prompt("¿Quiere comprar otro producto? Si/No");
		}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");
		promedio=Math.round(cantidadMax/cantidadTotal*100);
		document.write("El alcohol mas barato vendió "+menorPrecioAlcohol+" uniades y el fabricante fue "+fabricante+".<br>");
		document.write("El producto que mas vendió fue el "+producto+" con "+cantidadMax+" unidades vendidas con un promedio de "+ promedio+"% sobre el total de unidades vendidas.<br>");
		document.write("En total hay "+acumuladorJabon+" unidades de jabón.<br>");
}