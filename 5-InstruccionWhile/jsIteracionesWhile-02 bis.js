/*
While 2 Bis; Carnelos Duarte Joaquin Alejo */
/*
Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 y menores 20 
(inclusive en ambos casos)(VALIDAR) Mostrar por console.log*/
function mostrar()
{
	let numero=0;
	let cantidad=0;
	let rango=0;
	let respuesta="si";
	let i=0;

	
	while(i<5){
		numero = parseInt(prompt("Ingrese un número"));
		i++;
		if (isNaN(numero)){
			numero = parseInt(prompt("Por favor,Ingrese solo numeros:"));
		}
		if (numero>10&&numero<20) {
			cantidad++;
		}
	}
	console.log("La cantidad de numeros mayores de diez y menores de veinte "+ cantidad+".");
}
