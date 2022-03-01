/*Parcial 2019 Ej 7, Carnelos Duarte Joaquín Alejo*/
/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de
las alturas en centimetros(validar entre 0 y 250) ,
el sexo. (validar el sexo “f” o “m”) 
de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros.
*/
function mostrar()
{
	let i;
	let sexo;
	let altura;
	let alturaAcumulador=0;
	let promedioAltura;
	let sexoMenor;
	let alturaBaja=0;
	let bandera=0
	let mujeresAltas=0;

	for(i=0;i<=4;i++){
		sexo=prompt("Ingrese sexo: f/m");
		while(sexo!="f"&&sexo!="m"){
			sexo=prompt("Por favor,Ingrese sexo: f/m");
		}
		altura=parseInt(prompt("Ingrese altura del alumno: 130-250"));
		while(isNaN(altura)||altura<130||altura>250){
			altura=parseInt(prompt("Por favor, ingrese altura del alumno: 130-250"));
		}
		alturaAcumulador=alturaAcumulador+altura;
		promedioAltura=alturaAcumulador/5;

		if(altura<alturaBaja||bandera==0){
			alturaBaja=altura;
			sexoMenor=sexo;
			bandera=1
		}
		if(altura>190){
			if(sexo=="f"){
				mujeresAltas++;
			}
		}

	}
	alert("El promedio de las alturas totales es " + promedioAltura+"cm.");
	alert("La altura mas baja es " + alturaBaja+"cm y el sexo de esa persona es "+sexoMenor+".");
	alert("La cantidad de mujeres altas fue de "+mujeresAltas+".");
}