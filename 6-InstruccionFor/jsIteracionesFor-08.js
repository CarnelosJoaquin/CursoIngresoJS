/*
For 8; Carnelos Duarte Joaquin Alejo */
/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/
function mostrar()
{
	let numero;
	let divisores=0;
	let i;
	let mensaje;

	numero=parseInt(prompt("Ingrese un número"));

	for(i=1;i<=numero;i++){
		if(numero%i==0){
			divisores++;
			if(divisores>=3){
				break;
			}
		}
	}
	if(divisores==2){
		mensaje = "El número es primo."
	}
	else{
		mensaje = "El número no es primo."
	}
	alert(mensaje);
}