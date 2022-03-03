/*Simulacro 3, Carnelos Duarte Joaquín Alejo*/
/*
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, Peterbald , generico)
y si es de tipo "otros" o pájaro , pedir solo un texto.
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/
function mostrar()
{
	let mascota;
	let raza;
	let edad;
	let nombre;
	let i;
	let gatoViejo=0;
	let gatoViejoNombre;
	let perroViejo=0;
	let perroViejoNombre;
	let pajaroViejo=0;
	let pajaroViejoNombre;
	let otroViejo=0;
	let otroViejoNombre;
	let cantGatos=0;
	let cantPerros=0;
	let cantPajaros=0;
	let cantOtros=0;
	let cantSiames=0;
	let cantTurco=0;
	let cantPeterbeald=0;
	let cantGenerico=0;
	let razaMayor;
	let promedioEdad;
	let acumSiames=0;
	let acumTurco=0;
	let acumPeter=0;
	let acumGen=0;


	for(i=0;i<10;i++){
		mascota=prompt("Ingrese mascota: gato/perro/pájaro/otros");
		while(!(mascota=="gato"||mascota=="perro"||mascota=="pájaro"||mascota=="otros")) {
			mascota=prompt("Por favor,Ingrese mascota: gato/perro/pájaro/otros");
		}
		switch(mascota){
			case"gato":
			raza=prompt("Ingrese raza: siamés/turco/peterbald/generico");
			while(!(raza=="siamés"||raza=="turco"||raza=="peterbald"||raza=="generico")){
				raza=prompt("Por favor,Ingrese raza: siamés/turco/peterbald/generico");
			}
			edad=parseInt(prompt("Ingrese años de edad(entre 1 y 20)."));
    		while(isNaN(edad)||edad>20||edad<1){
      			edad=(prompt("Por favor,Ingrese años de edad(entre 1 y 20)"));
    		}
    		nombre=prompt("Ingrese nombre.");
    		while(!(isNaN(nombre))){
    			nombre=prompt("Ingrese nombre.");
    		}
    		cantGatos++;
    		if(edad>=gatoViejo){
    			gatoViejo=edad;
    			gatoViejoNombre=nombre;
    		}	
    		switch(raza){
    			case"siamés":
    			cantSiames++;
    			acumSiames=acumSiames+edad;
    			break;
    			case"turco":
    			acumTurco=acumTurco+edad;
    			cantTurco++;
    			break;
    			case"peterbald":
    			acumPeter=acumPeter+edad;
    			cantPeterbeald++;
    			break;
    			case"generico":
    			acumGen=acumGen+edad;
    			cantGenerico++;
    			break;
    		}
    		if(cantSiames>cantTurco&&cantPeterbeald&&cantGenerico){
    			razaMayor= "siamés";
    			promedioEdad=acumSiames/cantSiames;
    		}
    		else if(cantTurco>cantPeterbeald&&cantGenerico){
    			razaMayor= "turco";
    			promedioEdad=acumTurco/cantTurco;
    			}
    		else if(cantPeterbeald>cantGenerico){
    			razaMayor= "peterbald";
    			promedioEdad=acumPeter/cantPeterbeald;
    			}
    		else{
    			razaMayor="generico";
    			promedioEdad=cantGenerico/cantGenerico;
    			}
			break;
			case"perro":
			raza=prompt("Ingrese raza: pastor/toy/callejero");
			while(!(raza=="pastor"||raza=="toy"||raza=="callejero")){
				raza=prompt("Por favor,Ingrese raza: pastor/toy/callejero");
			}
			edad=parseInt(prompt("Ingrese años de edad(entre 1 y 20)."));
    		while(isNaN(edad)||edad>20||edad<1){
      			edad=(prompt("Por favor,Ingrese años de edad(entre 1 y 20)"));
    		}
    		nombre=prompt("Ingrese nombre.");
    		while(!(isNaN(nombre))){
    			nombre=prompt("Ingrese nombre.");
    		}
    		cantPerros++;
    		if(edad>=perroViejo){
    			perroViejo=edad;
    			perroViejoNombre=nombre;
    		}
			break;
			case"pájaro":
			raza=prompt("Ingrese raza:");
			while(!(isNaN(raza))){
				raza=prompt("Por favor,Ingrese raza:");
			}
			edad=parseInt(prompt("Ingrese años de edad(entre 1 y 50)."));
    		while(isNaN(edad)||edad>50||edad<1){
      			edad=(prompt("Por favor,Ingrese años de edad(entre 1 y 50)"));
    		}
    		nombre=prompt("Ingrese nombre.");
    		while(!(isNaN(nombre))){
    			nombre=prompt("Ingrese nombre.");
    		}
    		cantPajaros++;
    		if(edad>=pajaroViejo){
    			pajaroViejo=edad;
    			pajaroViejoNombre=nombre;
    		}
			break;
			case"otros":
			raza=prompt("Ingrese raza:");
			while(!(isNaN(raza))){
				raza=prompt("Por favor,Ingrese raza:");
			}
			edad=parseInt(prompt("Ingrese años de edad(entre 1 y 100)."));
    		while(isNaN(edad)||edad>100||edad<1){
      			edad=(prompt("Por favor,Ingrese años de edad(entre 1 y 100)"));
    		}
    		nombre=prompt("Ingrese nombre.");
    		while(!(isNaN(nombre))){
    			nombre=prompt("Ingrese nombre.");
    		}
    		cantOtros++;
    			if(edad>=otroViejo){
    				otroViejo=edad;
    				otroViejoNombre=nombre;
    			}
			break;
		}
	}
	if(cantPerros!=0){
		document.write("El perro mas viejo se llama "+perroViejoNombre+".<br>");
	}

	if(cantPajaros!=0){
		document.write("El pájaro mas viejo se llama "+pajaroViejoNombre+".<br>");
	}
	if(cantOtros!=0){
		document.write("De tipo otro, el mas viejo es un "+raza+" llamado "+otroViejoNombre+".<br>");
	}
	if(cantGatos!=0){
		document.write("El gato mas viejo se llama "+gatoViejoNombre+".<br>");
		document.write("La raza de gatos con mas animales es "+razaMayor+" y el promedio de edad es de "+promedioEdad+" años.<br>");
	}
}