/*3er ejercicio recuperatorio de curso de ingreso,Carnelos Duarte Joaquín Alejo*/

/*3)Nos ingresan una cantidad indeterminada de préstamos otorgados por las distintas sucursales de una Entidad Financiera, validando los datos ingresados:

nombre del titular, sucursal( “CABA”, “BS.AS.” o “INTERIOR”), tipo(“grande”,”mediana”,“chica”), monto del prestamo en Pesos.

informar:

a)el nombre del titular al que se le prestó el menor monto de préstamo.

b)el promedio del monto prestado por las sucursales del tipo chica.

c)la sucursal con mas cantidad de préstamos.*/


function mostrar(){

	let nombreTitular;
	let sucursal;
	let tipo;
	let monto;
	let respuesta;

	let nombreTitularMenor;
	let menorMontoTitular;
	let bandera=0;

	let acumMontoChica=0;
	let promedioMontoChica;
	let cantidadSucursalChica=0;

	let cantPrestamosCaba=0
	let cantPrestamosBsAs=0
	let cantPrestamosInterior=0
	let masPrestamos;

	do{
		nombre=prompt("Ingrese nombre del titular:");
		while(isNaN(nombre)==false){
			nombre=prompt("Por favor, Ingrese nombre del titular:");
		}
		sucursal=prompt("Ingrese sucursal: CABA/BS.AS/INTERIOR");
    	while(!(sucursal=="CABA"||sucursal=="BS.AS"||sucursal=="INTERIOR")){
      		sucursal=prompt("Por favor, Ingrese sucursal: CABA/BS.AS/INTERIOR");
    	}
    	tipo=prompt("Ingrese tipo: grande/mediana/chica");
		while(!(tipo=="grande"||tipo=="mediana"||tipo=="chica")){
			tipo=prompt("Por favor, Ingrese tipo: grande/mediana/chica");
		}
		monto=parseInt(prompt("Ingrese monto del prestamo(de 100.000 a 10.000.000 inclusives )"));
		while(isNaN(monto)==true||monto<100000||monto>10000000){
    		monto=parseInt(prompt("Por favor, Ingrese monto del prestamo(de 100.000 a 10.000.000 inclusives"));
    	}
		respuesta=prompt("Desea ingresar otro titular: si/no");

		/*A*/
		if(monto<menorMontoTitular||bandera==0){
			bandera=1;
			menorMontoTitular=monto;
			nombreTitularMenor=nombre;
		}
		/*B*/
		if(tipo=="chica"){
			cantidadSucursalChica++;
			acumMontoChica=acumMontoChica+monto;
		}
		/*C*/
		switch(sucursal){
			case"CABA":
			cantPrestamosCaba++;
			break;
			case"BS.AS":
			cantPrestamosBsAs++;
			break;
			case"INTERIOR":
			cantPrestamosInterior++;
			break;
		}


	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");

	if (cantPrestamosCaba>cantPrestamosBsAs&&cantPrestamosCaba>cantPrestamosInterior){
            masPrestamos = "CABA";
        }
    else if(cantPrestamosBsAs>cantPrestamosInterior){
            masPrestamos = "BS.AS";
    }
    else {
    	masPrestamos = "INTERIOR"; 
    }

	promedioMontoChica=Math.round(acumMontoChica/cantidadSucursalChica);

	document.write("El nombre del titular al que se le prestó el menor monto de préstamo es "+nombreTitularMenor+".<br>");

	if(cantidadSucursalChica!=0){
		document.write("El promedio del monto prestado por las sucursales del tipo chica es de "+promedioMontoChica+"$ por sucursal.<br>");
	}
	else {
		document.write("No hay sucursales del tipo chica para sacar un monto de prestamos.<br>");
	}
	document.write("La sucursal a la que se le entrego mas prestamos es: "+masPrestamos+".<br>");

}