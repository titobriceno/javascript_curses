// conjunto de senticias para generar algo más o crear acciones 

// funciones declarativas, son las funciones que tienen como tal un nombre y son declaradas con la palabra reservada funtion

function miFuncion() {
    return 3 ;

}

// funciones de exprecion o tambien llamadas funciones anonimas son las funciones que estan contenidas en una variable, ya que las variables en java script permiten
// almecenar funciones dentro de las variables

var funtionInVar = function(){
    return 3;
}

// la pablra reservada para funcion no es funtion es function

// ejemplos de funciones en corridos en el explorador


// esta funcion tiene parametros de entrada en este caso es un string que es el nombre de un estudiante
// con la funcion console log mostramos una salida en consola
// no son comillas son como tildes invertidas
function saludaEstudiante (nombreEstudiante){
    console.log(`hola mi buen estuduante ${nombreEstudiante}`);
}

// esta funcion contiene una variable en donde se almacena la operación  y despues se retorna
// una funcion puede tener varios parametros
// los parametros son datos que usan para procesar en la función
function suma (a, b){
    var resultado = a + b;
    return resultado;
}

function suma2 (a, b){
    return a + b;
}