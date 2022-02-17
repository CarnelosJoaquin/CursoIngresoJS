/*
TP 4 if(cantidad) switch(marca) tercer entrega ; Carnelos Duarte Joaquin Alejo */
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let precioSinDescuentos = 35*cantidad;
    let descuento;
    let precioDescuento;
    let precioFinal; 


    if(cantidad < 3){
        descuento = 0;
    }

    if(cantidad >= 6){
        descuento = 50;
    }

    if(cantidad == 5){
        switch(marca){
            case "ArgentinaLuz":
            descuento = 40;
            break;
            default:
            descuento = 30;
        }
    }

    if(cantidad == 4){
        switch(marca){
            case "ArgentinaLuz":
            case "FelipeLamparas":
            descuento = 25;
            break;
            default:
            descuento = 20;
        }
    }

    if(cantidad == 3){
        switch(marca){
            case "ArgentinaLuz":
            descuento = 15;
            break;
            case "FelipeLamparas":
            descuento = 10;
            break;
            default:
            descuento = 5;
        }
    }
    precioFinal  = precioSinDescuentos - (precioSinDescuentos*descuento/100);
    precioDescuento = precioFinal;
    document.getElementById("txtIdprecioDescuento").value = precioDescuento;

    if (precioFinal > 120){
        alert("De "+ Math.round((precioFinal*1.1))+ "$ , usted pago "+ Math.round(precioFinal*0.10)+ "$ en ingresos brutos.");
    }
    else{
        alert("Usted pago " + precioFinal + " $.");
    }
}