// if
if (true){

}// esta es la sintaxis basica de un if, en el parentesis se encuentra la validacion de dato u operacion que queremos validar

//  ejemplo
if (true){
    console.log("hola")
}// hola por que el valor es verdadero

if (false){
    console.log("hola")
}// devuelve undefined ya que no se le indico que hiciera algo mas y como el valor es falso se le asigan el valor undefined

// else
//  es el valor de negacion de las condicionales y lo que hace es hacer una accion adicional cuando la condicion es false
if (false){
    console.log("hola")//saludar
} else {
    console.log("adios")// despedir
}// retorna un adios por es false


// else if
//es el si anidado
if (1 === "1"){
    console.log("es un uno")
} else if (1 == "1"){
    console.log("es un uno")
}else{
    console.log("no es nada")
}

// operador ternario
//  el operador ternario es una forma simple de realizar un if con otra sintaxis
// sintaxis: var xxx = condition ? true : false
var a = 1;
var b = "1";
var xxx = a == b ? "si soy un uno" : "no lo soy"
console.log(xxx); // devuelve si soy un numero 


// priedra papel y tijera