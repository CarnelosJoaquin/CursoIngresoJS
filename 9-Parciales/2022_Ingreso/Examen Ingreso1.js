/*1er ejercicio examen de curso de ingreso, Carnelos Duarte Joaquín Alejo*/

/*Enunciado:
1)De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.

a)informar la cantidad de personas de sexo femenino.

b)la altura promedio en total

c)el nombre del hombre con menos peso(si lo hay)

Pedir datos por prompt y mostrar por document.write*/
function mostrar(){
	let i;
	let nombre;
	let altura;
	let peso;
	let sexo;
	let cantFemenino=0;
	let cantMasculino=0;
	let acumuladorAltura=0
	let promedioAltura;
	let pesoHombreLiviano=0;
	let bandera=0;
	let nombreHombreLiviano;



	for(i=0;i<3;i++){
		nombre=prompt("Ingrese nombre del paciente.");
    	while(isNaN(nombre)==false){
    		nombre=prompt("¨Por favor, Ingrese nombre real del paciente.");
    	}
    	altura=parseInt(prompt("Ingrese altura en cm del paciente (120-210)"));
   		while(altura<120||altura>210||isNaN(altura)==true){
      		altura=(prompt("Por favor,Ingrese altura en cm del paciente (120-210)."));
   		}
   		sexo=prompt("Ingrese sexo: femenino/masculino");
    	while(!(sexo=="femenino"||sexo=="masculino")){
      		sexo=prompt("Por favor,Ingrese sexo: femenino/masculino");
      	}
      	peso=parseFloat(prompt("Ingrese peso en KG(30-150)"));
    	while(isNaN(peso)==true||peso<30||peso>150){
    		peso=parseFloat(prompt("Por favor, Ingrese peso en KG(30-150)"));
    	}
    	acumuladorAltura=acumuladorAltura+altura;
    	
    	switch(sexo){
    		case"femenino":
    		cantFemenino++;
    		break;
    		case"masculino":
    		cantMasculino++;
    		if (peso<pesoHombreLiviano||bandera==0) {
    			pesoHombreLiviano=peso;
    			nombreHombreLiviano=nombre;
    			bandera=1;
    		}
    		break;
    	}
    }
    cantGente=cantFemenino+cantMasculino;
    promedioAltura=Math.round(acumuladorAltura/cantGente);
    document.write("La cantidad de mujeres es "+cantFemenino+".<br>");
    document.write("La altura promedio de los 5 pacientes es "+promedioAltura+"cm.<br>");
    if(cantMasculino!=0){
    	document.write("El nombre del hombre con menos peso es "+nombreHombreLiviano+".<br>");
    }
    else if(cantMasculino==0){
    	document.write("No hay hombres para saber quien es el mas liviano.<br>");
    }
}