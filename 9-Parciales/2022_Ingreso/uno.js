/*Simulacro 1, Carnelos Duarte Joaquín Alejo*/
/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobreza entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
i) que continente tiene mas habitantes.*/
function mostrar()
{ 
	let i;
	let continente;
	let pais;
	let paisFrio;
	let millonesHabitantes;
	let millonesAcumulados=0;
	let millonesMasCuarenta=0;
	let menosMillones=0;
	let promedioHabitantes;
	let promedioMasCuarenta;
	let nivelPobreza;
	let temperatura;
	let temperaturasPares=0;
	let temperaturaMin=0;
	let temperaturaImparEuropa=0;
	let temperaturaBajoCeroAmerica=0;
	let cantidadMasCuarenta=0;
	let respuesta;
	let bandera=0;
	let paisPocaGente=0;
	let habitantesEuropa=0;
	let habitantesAsia=0;
	let habitantesAmerica=0;
	let habitantesAfrica=0;
	let habitantesOceania=0;
	let continenteMax;


	for(i=0;i<=4;i++){
		continente=prompt("Ingrese continente: América/Asia/Europa/África/Oceanía");
		while(!(continente=="América"||continente=="Asia"||continente=="Europa"||continente=="África"||continente=="Oceanía")){
			continente=prompt("Por favor, ingrese continente: América/Asia/Europa/África/Oceanía");
		}
		pais =prompt("Ingrese un país de dicho continente");
		millonesHabitantes=parseInt(prompt("Ingrese cantidad de millones de habitantes entre 1 y 7000 inclusives."));
		while(isNaN(millonesHabitantes)||(millonesHabitantes<1||millonesHabitantes>7000)){
			millonesHabitantes=parseInt(prompt("Por favor, ingrese cantidad de millones de habitantes entre 1 y 7000 inclusives."));
		}
		nivelPobreza=prompt("Ingrese nivel de pobreza: pobre(menos Europa)/rico/muy rico");
		while((!(nivelPobreza=="pobre"||nivelPobreza=="rico"||nivelPobreza=="muy rico"))||nivelPobreza=="pobre"&&continente=="Europa"){
			nivelPobreza=prompt("Por favor, ingrese nivel de pobreza: pobre(menos Europa)/rico/muy rico");
		}
		temperatura=parseInt(prompt("Ingrese una temperatura  entre -50°C y 50°C inclusives."));
		while(isNaN(temperatura)||(temperatura>51||temperatura<-51)){
			temperatura=(prompt("Por favor, ingrese una temperatura entre -50°C y 50°C inclusives."));
		}
		if (temperatura%2==0){
			temperaturasPares++;
		}
		if (temperatura>40) {
			cantidadMasCuarenta++;
			millonesMasCuarenta=millonesMasCuarenta+millonesHabitantes;
		}
		if(temperatura<temperaturaMin){
			temperaturaMin=temperatura;
			paisFrio=pais;
		}
		switch(continente){
			case"Europa":
			if (temperatura%2!=0) {
				temperaturaImparEuropa++;
			}
			habitantesEuropa=habitantesEuropa+millonesHabitantes;
			break;
			case"América":
			if (temperatura<0) {
				temperaturaBajoCeroAmerica++;
			}
			habitantesAmerica=habitantesAmerica+millonesHabitantes;
			break;
			case"África":
			habitantesAfrica=habitantesAfrica+millonesHabitantes;
			break;
			case"Asia":
			habitantesAsia=habitantesAsia+millonesHabitantes;
			break;
			case"Oceanía":
			habitantesOceania=habitantesOceania+millonesHabitantes;
			break;
		}
		if(habitantesEuropa>(habitantesAmerica||habitantesAfrica||habitantesAsia||habitantesOceania)){
			continenteMax="Europa";
		}
		else if(habitantesAmerica>(habitantesAfrica||habitantesAsia||habitantesOceania)){
			continenteMax="América";
		}
		else if(habitantesAsia>(habitantesAfrica||habitantesOceania)){
			continenteMax="Asia";
		}
		else if(habitantesAfrica>habitantesOceania){
			continenteMax="África";
		}
		else{
			continenteMax="Oceanía";
		}
		if(millonesHabitantes<menosMillones||bandera==0){
			paisPocaGente=pais;
			menosMillones=millonesHabitantes
			bandera=1;
		}
		millonesAcumulados=millonesAcumulados+millonesHabitantes;
		promedioHabitantes=millonesAcumulados/5;
		promedioMasCuarenta=millonesMasCuarenta/cantidadMasCuarenta;
	}

	document.write("La cantidad de temperaturas pares es "+temperaturasPares+".<br>");
	document.write("la cantidad de temperaturas impares de europa "+temperaturaImparEuropa+".<br>");
	document.write("El nombre del pais con menos habitantes es "+paisPocaGente+".<br>");
	document.write("La cantidad de paises que superan los 40 grados es "+cantidadMasCuarenta+".<br>");
	document.write("La cantidad de paises de america que tienen menos de 0 grados es "+temperaturaBajoCeroAmerica+".<br>");
	document.write("El promedio de habitantes entre los paises ingresados es "+promedioHabitantes+" millones de habitantes.<br>");
	document.write("El promedio de habitantes entre los paises que superan los 40 grados "+promedioMasCuarenta+" millones de habitantes.<br>");
	document.write("La temperatura mínima ingresada es "+temperaturaMin+"°C y nombre del pais que registro esa temperatura es "+paisFrio+".<br>");
}