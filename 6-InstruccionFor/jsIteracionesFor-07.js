/*
For 7; Carnelos Duarte Joaquin Alejo */
/*Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado,
y mostrar la cantidad de numeros divisores encontrados.
*/function mostrar()
{
	let numero;
	let divisores=0;
	let i;

	numero=parseInt(prompt("Ingrese un número"));

	for(i=1;i<=numero;i++){
		if(numero%i==0){
			divisores++;
			document.write( i + "<br>");
		}
	}
	document.write("La cantidad de divisores "+ divisores);
}