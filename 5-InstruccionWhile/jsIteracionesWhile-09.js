/*
While 9; Carnelos Duarte Joaquin Alejo */
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()


{	
	let bandera=0;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta="si";

	do{
		numeroIngresado= parseInt(prompt("Ingrese un número:"));
		while (isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Por favor,Ingrese solo numeros:"));}

		if(numeroIngresado>numeroMaximo||bandera==0){
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado<numeroMinimo||bandera==0){
			numeroMinimo = numeroIngresado;
			bandera=1;
		}	
		respuesta = prompt("¿Quiere añadir otro número? Si/No");
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");	
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}