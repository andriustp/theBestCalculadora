
var segundoTexto = false;/*"se deben crear estas dos variables ((var segundoTexto y var operador)) para poder utilizar las dos recuadros o lineas de texto.*/
var operador = "";
function sumar() {
    segundoTexto = true;
    operador = "+";
}
function resta() {
    segundoTexto = true;
    operador = "-";

}
function multiplicacion() {
    segundoTexto = true;
    operador = "*";
}
function divicion() {
    segundoTexto = true;
    operador = "/";
}

function Escribir(numButton) {/*"Escibir(numButton)""nos con esta funcion damos vida al teclado, a los botones*/
    if (!segundoTexto) {/*"con esta funcion decimos que se escriba en la priemra linea, casilla o cuadro CON EL PREIMER "if" y con segundo "if" se selecciona la SEGUNDO casilla, linea o cuadro*/
        txtvalor1.value += numButton;/*" aca concardenamos ((+=)) para poder digitar varios numeros en el renglon o recuadro*/
    }
    if (segundoTexto) {
        txtvalor2.value += numButton;/*" aca concardenamos ((+=)) para poder digitar varios numeros en el renglon o recuadro*/
    }
   
}
/*"UNA FORMA DE EJECUTAR LAS OPERACIONES DE (+,-,*,/,) ES LA SIGUIENTE:"*/
function operacion() {
    switch (operador) {
        case "+":
            alert("su resultado es= " + (Number(txtvalor1.value) + Number(txtvalor2.value)));/*"alert""nos muestra una ventana emergente con el texto q esta dentro del ()*/
            break;
        case "-":
            alert("su resultado es= " + (Number(txtvalor1.value) - Number(txtvalor2.value)));/*"alert""nos muestra una ventana emergente con el texto q esta dentro del ()*/
            break;
        case "*":
            alert("su resultado es= " + (Number(txtvalor1.value) * Number(txtvalor2.value)));/*"alert""nos muestra una ventana emergente con el texto q esta dentro del ()*/
            break;
        case "/":
            alert("su resultado es= " + (Number(txtvalor1.value) / Number(txtvalor2.value)));/*"alert""nos muestra una ventana emergente con el texto q esta dentro del ()*/
            break;
        default:
            break;
    }
}

/*"SEGUNDA FORMA DE EJECUTAR LAS OPERACIONES DE (+,-,*,/,)"*/

//function operacion() { /* con esta funcion, al elegir el operador(+,-,*,/,) nos dara el resultado*/
//    //if (operador == "+") {
//    //    alert("su resultado es= " + (Number(txtvalor1.value) + Number(txtvalor2.value)));/*"alert""nos muestra una ventana emergente con el texto q esta dentro del ()*/
//    //}
//    //if (operador == "-") {
//    //    alert("su resultado es= " + (Number(txtvalor1.value) - Number(txtvalor2.value)));/*"alert""nos muestra una ventana emergente con el texto q esta dentro del ()*/
//    //}
//    //if (operador == "*") {
//    //    alert("su resultado es= " + (Number(txtvalor1.value) * Number(txtvalor2.value)));/*"alert""nos muestra una ventana emergente con el texto q esta dentro del ()*/
//    //}
//    //if (operador == "/") {
//    //    alert("su resultado es= " + (Number(txtvalor1.value) / Number(txtvalor2.value)));/*"alert""nos muestra una ventana emergente con el texto q esta dentro del ()*/
//    //}

//}

//"con esta funcion de ""borrar"" le daremos la funcion a la TECLA "C" y poder a ingresar valores desde el proimer cuadro de texto."
function borrar() {/*sea crea la funcion ""Borrar()"" se le da la funcion a la TECLA ""C""*/
    txtvalor1.value = "";/*a  ""txtvalor1.value"" se la un valor de ( "" ) EL CUAL QUIERE DECIR VACIO, esto para borrar o elimar lo q estba escrito en ese casilla*/
    txtvalor2.value = "";/*a  ""txtvalor2.value"" se la un valor de ( "" ) EL CUAL QUIERE DECIR VACIO, esto para borrar o elimar lo q estba escrito en ese casilla*/
    segundoTexto = false;
    operador = "";
}
