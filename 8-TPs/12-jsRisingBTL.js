/* Tp 12; Carnelos Duarte Joaquín Alejo*/
/*no encontre la forma de encararlo con for*/

/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar
una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas)
y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	let edad;
 	let sexo;
 	let estadoCivil;
    let sueldoBruto;
    let legajo;
    let nacionalidad=0;
    let respuesta;

            edad=parseInt(prompt("Ingrese años de edad."));
            while(isNaN(edad)||(edad<17&&edad>91)){
                edad=(prompt("Ingrese años de edad reales del usuario"));
            }
            sexo=prompt("Ingrese sexo: f/m");

            while(!(sexo=="f"||sexo=="m")){
                sexo=prompt("Por favor,Ingrese sexo: f/m");
            }
            estadoCivil=prompt("Ingrese estado civil: soltero/casado/viudo");
            while(!(estadoCivil=="soltero"||estadoCivil=="casado"||estadoCivil=="viudo"||estadoCivil=="divorciados")){
                estadoCivil=prompt("Por favor, ingrese estado civil: soltero/casado/divorciados/viudo");
            }
            sueldoBruto=parseInt(prompt("Ingrese sueldo bruto del usuario(no menor a 8000$)"))
             while(isNaN(sueldoBruto)||(sueldoBruto<8000)){
                sueldoBruto=(prompt("Por favor, ingrese sueldo bruto del usuario(no menor a 8000$)"));
            }
            legajo=parseInt(prompt("Ingrese legajo correspondiente(desde 1000 hasta 9999 inclusives)"));
            while(isNaN(legajo)||(legajo<1000&&legajo>10000)){
                sueldoBruto=(prompt("Por favor, ingrese legajo correspondiente(desde 1000 hasta 9999 inclusives)"));
            }
            nacionalidad=prompt("Ingrese nacionalidad: argentina/extranjeros/nacionalizados");
            switch(nacionalidad){
                case"argentina":
                nacionalidad="A";
                break;
                case"extranjeros":
                nacionalidad="E";
                break;
                case"nacionalizados":
                nacionalidad="N"
                break;
                }
    
     document.getElementById("txtIdEdad").value=edad;
     document.getElementById("txtIdSexo").value=sexo;
     document.getElementById("txtIdEstadoCivil").value=estadoCivil;
     document.getElementById("txtIdSueldo").value=sueldoBruto;
     document.getElementById("txtIdLegajo").value=legajo;
     document.getElementById("txtIdNacionalidad").value=nacionalidad;
}
