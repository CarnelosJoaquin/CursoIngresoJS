/*Simulacro 2, Carnelos Duarte Joaquín Alejo*/
/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?*/
function mostrar()
{
  let nombre;
  let carrera;
  let EstadoCarrera;
  let sexo;
  let edad;
  let nota;
  let respuesta;
  let mensaje;
  let alumnosProg=0;
  let mujeresProg=0;
  let alumnosPsi=0;
  let alumnosDis=0;
  let noBinarios=0;
  let finalizantes=0;
  let acumuladorFinalizantes=0;
  let promedioFinalizantes;
  let nombreViejoPsi=0;
  let edadViejoPsi=0;
  let sexovVejoPsi=0;
  let bandera=0;
  let bandera2=0;
  let mejorNoBin=0;
  let estadoMejor;
  let nombreMejor;
  let carreraMayor;

  do{
    nombre=prompt("Ingrese nombre real del alumno.");
    carrera=prompt("Ingrese carrera del mismo: Programación/Psicología/Diseño gráfico");
    while(!(carrera=="Programación"||carrera=="Psicología"||carrera=="Diseño gráfico")) {
      carrera=prompt("Por favor,Ingrese carrera del mismo: Programación/Psicología/Diseño gráfico");
    }
    EstadoCarrera=prompt("Ingrese estado de la carrera: en curso/abandono/finalizado");
    while(!(EstadoCarrera=="en curso"||EstadoCarrera=="abandono"||EstadoCarrera=="finalizado")) {
      EstadoCarrera=prompt("Por favor,Ingrese estado de la carrera: en curso/abandono/finalizado");
    }
    sexo=prompt("Ingrese sexo: femenino/masculino/no binario");
    while(!(sexo=="femenino"||sexo=="masculino"||sexo=="no binario")){
      sexo=prompt("Por favor,Ingrese sexo: femenino/masculino/no binario");
    }
    edad=parseInt(prompt("Ingrese años de edad(18 o más)."));
    while(isNaN(edad)||(edad>80&&edad<18)){
      edad=(prompt("Por favor,Ingrese años de edad reales del pasajero"));
    }
    nota=parseInt(prompt("Ingrese Nota (entre 1 y 10)"));
    while(isNaN(nota)||(nota<0||nota>11)){
      nota=parseInt(prompt("Por favor, Ingrese Nota (entre 1 y 10)"))
    }
    respuesta=prompt("Desea ingresar los datos de otro alumno: si/no");
    switch(carrera){
      case"Programación":
      alumnosProg++;
      if(sexo=="femenino"){
        mujeresProg++;
      }
      break;
      case"Psicología":
      alumnosPsi++;
      if(edad>edadViejoPsi||bandera==0){
        edadViejoPsi=edad;
        sexovVejoPsi=sexo;
        nombreViejoPsi=nombre;
        bandera=1;
      }
      if(sexo=="no binario"){
        if(nota>mejorNoBin||bandera2==0){
          mejorNoBin=nota;
          estadoMejor=EstadoCarrera;
          nombreMejor=nombre;
          bandera2=1;
        }
      }
      break;
      case"Diseño gráfico":
      alumnosDis++;
      break;
    }
    if(sexo=="no binario"){
      noBinarios++;
    }
    if(EstadoCarrera=="finalizado"){
      finalizantes++;
      acumuladorFinalizantes=acumuladorFinalizantes+nota;
      promedioFinalizantes=acumuladorFinalizantes/finalizantes;
    }
    if(alumnosProg>alumnosDis&&alumnosPsi){
      carreraMayor="programación";
    }
    else if(alumnosPsi>alumnosDis){
      carreraMayor="psicología";
    }
    else{
      carreraMayor="diseño gráfico";
    }
  }while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");

  mensaje="La cantidad total de que ingresaron es:  Programación "+alumnosProg+";  Psicología "+alumnosPsi+";  Diseño gráfico "+alumnosDis+".<br>"
  mensaje+="La cantidad total de mujeres en Programación es "+mujeresProg+".<br>";
  mensaje+="La cantidad total alumnos no binarios es "+noBinarios+".<br>";
  mensaje+="El promedio de notas de los alumnos finalizantes.es "+promedioFinalizantes+".<br>";
  mensaje+="El Nombre del alumno mas viejo de psicología es "+nombreViejoPsi+" su sexo es "+sexovVejoPsi+" y su edad  es de "+edadViejoPsi+" años.<br>"
  mensaje+="El Nombre del mejor alumno no binario de psicología es "+nombreMejor+" su nota es "+mejorNoBin+" y su estado  en la carrera  es: "+estadoMejor+".<br>"
  mensaje+="La carrera con mayor cantidad de alumnos es "+carreraMayor+".<br>";
  document.write(mensaje);
}
