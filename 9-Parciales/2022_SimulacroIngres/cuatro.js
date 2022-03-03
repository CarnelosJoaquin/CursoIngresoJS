/*Simulacro 4, Carnelos Duarte Joaquín Alejo*/
/*"Super Chino" Se pide el ingreso de mercadería de un supermercado, hasta que el usuario quiera, se pide:
Tipo(limpieza , comestible , otros)solo estos tres tipos
Nombre del producto (validar no sea número)
Importe del producto (no mayor a 1000 pesos)
Procedencia (importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d) el tipo de mercadería que mas aparece
e) el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/
function mostrar()
{
	let tipo;
	let producto;
	let importe;
	let procedencia;
	let peso;
	let respuesta="si";
	let comestiblePesoPesado=0;
	let comestiblePesado;
	let bandera=0;
	let cantComestible=0;
	let cantLimpieza=0; 
	let cantOtros=0;
	let caroLimpieza=0;
	let caroComestible=0;
	let caroOtros=0;
	let productoCaroL;
	let productoCaroC;
	let productoCaroO;
	let productoCaro;
	let baratoElaborado=0;
	let nombreBaratoElaborado;
	let cantElaborado=0;
	let tipoMayor;
	let cantNoElaborado=0;
	let promedioElaborado;
	let pesosAcumulados=0;

	do{
		tipo=prompt("Ingrese tipo de producto: limpieza/comestible/otros");
		while(!(tipo=="limpieza"||tipo=="comestible"||tipo=="otros")){
			tipo=prompt("Por favor, Ingrese tipo de producto: limpieza/comestible/otros");
		}
		producto=prompt("Ingrese producto:");
		while(!(isNaN(producto))){
			producto=prompt("Por favor, Ingrese producto:");
		}
		importe=parseInt(prompt("Ingrese importe del producto (no mayor a 1000 pesos)"));
		while(isNaN(importe)||importe<1||importe>1000){
			importe=parseInt(prompt("Por favor, Ingrese importe del producto (no mayor a 1000 pesos)"));
		}
		procedencia=prompt("Ingrese procedencia del producto: importado/nacional/elaborado");
		while(!(procedencia=="importado"||procedencia=="nacional"||procedencia=="elaborado")){
			procedencia=prompt("Por favor, Ingrese procedencia del producto: importado/nacional/elaborado");
		}
		peso=parseInt(prompt("Ingrese peso del producto (no mayor a 30 kilos)"));
		while(isNaN(peso)||peso<1||peso>30){
			peso=parseInt(prompt("Por favor, Ingrese peso del producto (no mayor a 30 kilos)"));
		}
		pesosAcumulados=pesosAcumulados+importe;
    	switch(procedencia){
    		case"elaborado":
    		cantElaborado++;
    		if(importe<=baratoElaborado||bandera==0){
    			baratoElaborado=importe;
    			nombreBaratoElaborado=producto;
    			bandera=1;
    		}
    		break;
    		case"nacional":
    		case"importado":
    		cantNoElaborado++;
    		break;
    	}
    	promedioElaborado=Math.round(cantElaborado/(cantElaborado+cantNoElaborado)*100);
    	switch(tipo){
			case"limpieza":
			cantLimpieza++;
			if(importe>=caroLimpieza){
				caroLimpieza=importe;
				productoCaroL=producto;
			}
			break;
			case"comestible":
			cantComestible++;
			if(peso>comestiblePesoPesado){
				comestiblePesoPesado=peso;
				comestiblePesado=producto;
			}
			if(importe>=caroComestible){
				caroComestible=importe;
				productoCaroC=producto;
			}
			break;
			case"otros":
			cantOtros++;
			if(importe>=caroOtros){
				caroOtros=importe;
				productoCaroO=producto;
			}
			break;
		}
		if(cantLimpieza>cantComestible&&cantOtros){
			tipoMayor="limpieza"
		}
		else if(cantComestible>cantOtros){
			tipoMayor="comestible"
		}
		else{
			tipoMayor="otros"
		}

		if(caroLimpieza>caroComestible&&caroOtros){
    		productoCaro= productoCaroL;
    	}
    	else if(caroComestible>caroOtros){
    		productoCaro= productoCaroC;
    	}
    	else{
    		productoCaro= productoCaroO;
    		}
    	respuesta=prompt("Desea ingresar los datos de otro producto: si/no");
	}while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");

	if(cantComestible!=0){
		document.write("El comestible mas pesado es "+comestiblePesado+".<br>");
	}
	document.write("El producto mas caro es "+productoCaro+".<br>");
	if(cantElaborado!=0){
		document.write("El producto elaborado mas barato es "+nombreBaratoElaborado+".<br>");
		document.write("El promedio de productos elaborados es"+promedioElaborado+"%.<br>");
	}
	document.write("El tipo de mercaderia que mas aparece es "+tipoMayor+".<br>");
	document.write("La cantidad de pesos acumulados es "+pesosAcumulados+".<br>")
}