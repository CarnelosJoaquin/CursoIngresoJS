/*
IF 10 ; Carnelos Duarte Joaquin Alejo */
/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{	
	let nota;
	nota = Math.round(Math.random()*9+1);	
	
	if (nota>8){
		alert(nota +" EXCELENTE");
	}
	else{
		if(nota>3){
			alert(nota +" APROBÓ");
		}
		else {
			alert(nota +" Vamos, la proxima se puede");
		}
	}
}