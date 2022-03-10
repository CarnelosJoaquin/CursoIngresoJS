/*Simulacro 6, Carnelos Duarte Joaquín Alejo*/
/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una división de la UTN FRA,
los datos solicitados son:
Nombre(validar no sea numero)
Situación laboral ("buscando", "trabajando" o "solo estudiante")
Cantidad de materias(más de cero y menos de 8)
Sexo (femenino, masculino, no binario)
Nota promedio (entre 0 y 10)
Edad (validar entre 18 y 85 inclusive)
Se debe informar de existir, o informar que no existe, en el caso que corresponda.
a) El nombre del mejor promedio que no de los que trabajan o están buscando}
b) El nombre del más viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situación laboral
d) La edad y nombre del que cursa menos cantidad de materias y que esté buscando trabajo*/
function mostrar()
{
	let nombre;
	let situacionLaboral;
	let cantMaterias;
	let sexo;
	let nota;
	let edad;
	let mejorNoTrabaja=0;
	let mejorNotrabajaNombre;
	let genteBuscando=0;
	let genteTrabajando=0;
	let genteSoloEstudia=0;
	let viejoEdadEstudia=0;
	let nombreViejoEstudia;
	let acumuladorNotaTrabaja=0;
	let acumuladorNotaBuscando=0;
	let acumuladorNotaSoloEstudia=0;
	let promedioTrabaja;
	let promedioBuscando;
	let promedioSoloEstudia;
	let MenosMaterias=0;
	let edadMenos;
	let nombreMenos;
	let bandera=0;


	do{
		nombre=prompt("Ingrese nombre del alumno.");
    	while(!(isNaN(nombre))){
    		nombre=prompt("Por favor, Ingrese nombre real del alumno.");
    	}
    	situacionLaboral=prompt("Ingrese situacion laboral del alumno: buscando/trabajando/solo estudiante")
    	while(!(situacionLaboral=="buscando"||situacionLaboral=="trabajando"||situacionLaboral=="solo estudiante")){
    		situacionLaboral=prompt("Por favor, Ingrese situacion laboral del alumno: buscando/trabajando/solo estudiante")
    	}
    	cantMaterias=parseInt(prompt("Ingrese cantidad de materias(1-7)"));
    	while(isNaN(cantMaterias)||cantMaterias<1||cantMaterias>8){
    		cantMaterias=parseInt(prompt("Por favor, Ingrese cantidad de materias(1-7)"));
    	}
    	sexo=prompt("Ingrese sexo: femenino/masculino/no binario");
    	while(!(sexo=="femenino"||sexo=="masculino"||sexo=="no binario")){
      		sexo=prompt("Por favor,Ingrese sexo: femenino/masculino/no binario");
    	}
    	edad=parseInt(prompt("Ingrese años de edad(entre 18 y 85 inclusive)."));
    	while(edad>85||edad<18||isNaN(edad)){
      		edad=(prompt("Por favor,Ingrese años de edad del cliente(entre 18 y 85 inclusive)."));
   		}
   		nota=parseInt(prompt("Ingrese Nota promedio (entre 0 y 10)"));
   		while(isNaN(nota)||(nota<0||nota>10)){
      		nota=parseInt(prompt("Por favor, Ingrese Nota promedio (entre 0 y 10)"))
  		}
  		respuesta=prompt("Desea ingresar los datos de otro alumno: si/no");

  		if(situacionLaboral=="buscando"||situacionLaboral=="solo estudiante"){
  			if(nota>mejorNoTrabaja){
  				mejorNoTrabaja=nota;
  				mejorNotrabajaNombre=nombre;
  			}
  		}
  		switch(situacionLaboral){
  			case"buscando":
  			genteBuscando++;
  			acumuladorNotaBuscando=acumuladorNotaBuscando+nota;
  			promedioBuscando=acumuladorNotaBuscando/genteBuscando;
  			if(cantMaterias<MenosMaterias||bandera==0){
  				edadMenos=edad;
  				nombreMenos=nombre;
  				MenosMaterias=cantMaterias;
  				bandera=1;
  			}
  			break;
  			case"solo estudiante":
  			genteSoloEstudia++;
  			acumuladorNotaSoloEstudia=acumuladorNotaSoloEstudia+nota;
  			promedioSoloEstudia=acumuladorNotaSoloEstudia/genteSoloEstudia;
  			if(nota>viejoEdadEstudia){
  				viejoEdadEstudia=nota;
  				nombreViejoEstudia=nombre
  			}
  			break;
  			default:
  			genteTrabajando++;
  			acumuladorNotaTrabaja=acumuladorNotaTrabaja+nota;
  			promedioTrabaja=acumuladorNotaTrabaja+nota;
  		}
  	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");

  	if(genteBuscando!=0||genteSoloEstudia!=0){
  		document.write("El nombre del mejor promedio de los que no trabajan es "+mejorNotrabajaNombre+".<br>")
  	}
  		else{
  			document.write("No hay alumnos que no trabajen para sacar dicho promedio.<br>");
  		}
  	if(genteSoloEstudia!=0){
  		document.write("El nobmre del alumno mas viejo que solo estudia es "+nombreViejoEstudia+".<br>");
  		document.write("El promedio de los alumnos que solo estudian es "+promedioSoloEstudia+".<br>");
  	}
  		else{
  			document.write("No hay alumnos que sean solo estudiantes para sacar un promedio ni identificar al mas viejo.<br>");
  		}
  	if(genteBuscando!=0){
  		document.write("El promedio de los alumnos que buscan trabajo es "+promedioBuscando+".<br>");
  		document.write("El nombre del alumno que cursa menos materias y busca trabajo es "+nombreMenos+"y tiene "+edadMenos+" años.<br>");
  	}
  		else{
  			document.write("No hay alumnos que busquen trabajo para sacar un promedio de notas ni identificar al que menos materia cursa.<br>");
  		}
  	if(genteTrabajando!=0){
  		document.write("El promedio de los alumnos trabajan es "+promedioTrabaja+".<br>");
  	}
  		else{
  			document.write("No hay alumnos que trabajando para sacar un promedio.<br>");
  		}
  }
