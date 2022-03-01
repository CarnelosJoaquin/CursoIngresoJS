/*Parcial 2020 Ej2; Carnelos Duarte Joaquin Alejo*/
/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  let producto;
  let cantidad;
  let cantidadAcumulada=0;
  let precioUnitario;
  let precioFinal;
  let precioAcumulado=0;
  let precioDescuento=0
  let respuesta;
  let arenaAcumulada=0;
  let calAcumulada=0;
  let cementoAcumulado=0;
  let tipoMaximo=0;
  let precioArena=0;
  let precioCal=0;
  let precioCemento=0;
  let precioMax=0

  do{
    producto =prompt("Ingrese uno de los siguientes productos: arena/cal/cemento");
    while(!(producto=="arena"||producto=="cal"||producto=="cemento")){
      producto =prompt("Por favor,Ingrese uno de los siguientes productos: arena/cal/cemento");
    }
    cantidad=parseInt(prompt("Ingrese cantidad de Bolsas a comprar"));
    while(isNaN(cantidad)||cantidad<0){
      cantidad = parseInt(prompt("Por favor, ingrese cantidad de bolsas a comprar"));
    }
    precioUnitario=parseInt(prompt("Ingrese precio de bolsa por unidad"));
    while(isNaN(precioUnitario)||(cantidad<1)){
      precio=parseInt(prompt("Por favor, ingrese precio de bolsa por unidad"));

    }
    switch(producto){
      case"arena":
      arenaAcumulada=arenaAcumulada+cantidad;
      if (arenaAcumulada>tipoMaximo){
        tipoMaximo=arenaAcumulada;
      }
      precioArena=precioUnitario;
      if (precioArena>precioMax){
        precioMax=precioArena
      }
      break;
      case"cal":
      calAcumulada=calAcumulada+cantidad;
      if (calAcumulada>tipoMaximo) {
        tipoMaximo=calAcumulada;
      }
      precioCal=precioUnitario;
      if (precioCal>precioMax){
        precioMax=precioCal
      }
      break;
      case"cemento":
      cementoAcumulado=cementoAcumulado+cantidad;
      if(cementoAcumulado>tipoMaximo){
        tipoMaximo=cementoAcumulado;
      }
      precioCemento=precioUnitario;
      if (precioCemento>precioMax){
        precioMax=precioCemento;
      }
      break;
    }
    
    cantidadAcumulada=cantidadAcumulada+arenaAcumulada+calAcumulada+cementoAcumulado;
    
    if(cantidadAcumulada>10&&cantidadAcumulada<31){
      precioDescuento=(precioUnitario*cantidadAcumulada)*0.85;
    }
    if(cantidadAcumulada>30){
      precioDescuento=(precioUnitario*cantidadAcumulada)*0.75;
    }
    if(cantidadAcumulada<11){
      precioFinal=precioUnitario*cantidadAcumulada;
    }
  
    precioAcumulado=precioAcumulado+precioFinal;
    respuesta = prompt("¿Quiere comprar otro producto? Si/No");
    }while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");

    document.write("El importe total a pagar es "+precioAcumulado+".<br>")
    document.write("El producto con mayor cantidad de bolsas vendidas fue "+producto+" con "+tipoMaximo+".<br>");
    document.write("El producto con mayor precio fue "+producto+" con "+precioMax+".<br>")

    if(precioDescuento!=0){
      document.write("El importe a pagar con descuento aplicado es "+precioDescuento+".<br>")
    }

}