// el hosting es cuando se declaran las variables antes de declarar, esto sucede cuando el compilador lee el codigo, declara las variables para despues ser inicializadas.
//emac scrip6 revisar nuevo java scrip

// var palabra para declarar una variable
var miNombre; //inicialización de una variable
var miNombre = "tito" //variable inicializada

// ejemplo
console.log(miNombre)
 var miNombre = "ermesto";
//  retorna un undefined ya que sucede el hoisting, debido a que declaro la variable ya que no estaba declarada
//  y como ya estaba declarada esa variable tiene por defecto un valor undefined y el valor que se muestra en el console.log()
// sucedio por que se llama la variable antes de la inicialización.

// hositing en las funciones en javaScript se igual, llamamos la funcion antes de que lleguemos a la linea de codigo donde esta 
// la función, pero a diferencia de las variables las funciones si se guardan en memoria y toman el valor que estas hayan procesado
//  claro que solo retornara si no de pende de variables no inicializadas. si las variables no tienen asignación retornara undefined

//  una buena practica es primero inicializar todas las funciones al inicio del código para evitar el problema de hoisting con las variables.

// ejemplo de hoisting en functions.

llamadoALista();

function llamadoALista(){
    console.log("esta presente " + apellido)
}

// la variables esta despues de la función y como esta despues genera undefined, pero la funcion si trae el string. esto se 
// por que la variable se declaro abajo de la función.
var apellido = "Perez"