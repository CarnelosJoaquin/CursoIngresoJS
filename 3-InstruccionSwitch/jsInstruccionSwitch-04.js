/*
Switch 4; Carnelos Duarte Joaquin Alejo */
/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días."*/
function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;
	switch(mes){
		case "Febrero":
		alert("Este mes tiene 28 Días");
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert("Este mes tiene 30 días");
		break;
		default:
		alert("Este mes tiene 31 días");
	}
}