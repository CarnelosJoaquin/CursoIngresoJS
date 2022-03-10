/*2do ejercicio recuperatorio de curso de ingreso,Carnelos Duarte Joaquín Alejo*/

/*2)De 10 alumnos que ingresan a la Facultad se deben tomar y validar los siguientes datos:

nombre, edad, nota y sexo.

a)el nombre de la mujer con mas nota(si la hay)

b)la edad promedio en total

c)informar la cantidad de alumnos de sexo masculino.

Pedir datos por prompt y mostrar por document.write.*/


function mostrar(){

	let i;
	let nombre;
	let edad;
	let nota;
	let sexo;

	let cantMujeres=0;
	let mujerMejorNota=0
	let nombreMujerMejor;

	let acumuladorEdad=0;
	let promedioEdad;
	let cantGente;

	let cantHombres=0;

	for(i=0;i<10;i++){
		nombre=prompt("Ingrese nombre del alumno:");
		while(isNaN(nombre)==false){
			nombre=prompt("Por favor, Ingrese  nombre del alumno:");
		}
		edad=parseInt(prompt("Ingrese años de edad(entre 18 y 75 inclusive)."));
    	while(edad>75||edad<18||isNaN(edad)==true){
      		edad=(prompt("Por favor,Ingrese años de edad del cliente(entre 18 y 75 inclusive)."));
   		}
   		nota=parseInt(prompt("Ingrese Nota (entre 1 y 10)"));
   		while(isNaN(nota)==true||(nota<1||nota>10)){
      		nota=parseInt(prompt("Por favor, Ingrese Nota (entre 1 y 10)"))
  		}
  		sexo=prompt("Ingrese sexo: femenino/masculino");
    	while(!(sexo=="femenino"||sexo=="masculino")){
      		sexo=prompt("Por favor,Ingrese sexo: femenino/masculino");
    	}
    	/*A*/
    	if (sexo=="femenino") {
    		cantMujeres++;
    		if(nota>mujerMejorNota){
    			mujerMejorNota=nota;
    			nombreMujerMejor=nombre;
    		}
    	}
    	/*B*/
    	acumuladorEdad=acumuladorEdad+edad;

    	/*C*/
    	if(sexo=="masculino"){
    		cantHombres++;
    	}
	}
	cantGente=cantMujeres+cantHombres;
	promedioEdad=Math.round(acumuladorEdad/cantGente);

	if (cantMujeres!=0) {
		document.write("El nombre de la mujer con mejor nota es "+nombreMujerMejor+".<br>");
	}
	else if(cantMujeres==0){
		document.write("No hay mujeres para saber quien tiene la mejor nota.<br>");
	}
	document.write("El promedio de edad de los alumnos es de "+promedioEdad+" años.<br>");
	document.write("La cantidad de alumnos hombres es "+cantHombres+".<br>");
}