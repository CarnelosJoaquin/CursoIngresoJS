/*
For 4; Carnelos Duarte Joaquin Alejo */
/*Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.*/
function mostrar()
{

	let repetciones = prompt("ingrese el número de repeticiones");
	let i;


	for ( i = 0;repetciones>=i;i++){
		if(i==repetciones){
			break;
		}
		alert(i);
	}
}