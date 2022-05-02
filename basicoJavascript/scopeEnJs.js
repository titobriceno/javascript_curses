
//  en js existen un scope global y otro local 
//  las variables definidas fuera de las funciones se ejecutan en el scope global
var nombre = "Ernesto";

function nombreCompleto (){
    // las variables que se crean en una función pertenecen al scope local
    var apellido = "perez"
    // en esta salida se fuciono nombre con el signo $ y el apellido que se llamo con el nombre de la variable
    console.log(`hola mi nombre es frailejon ${nombre} `+ apellido)
}

nombreCompleto();

var name = "Ernesto";

function allName (){
    var surName = "Perez"
    // tambien de esta forma se puede realizar la salida del string
    console.log("hola mi nombre es frailefon "+ name +""+ surName)
}
// no se puede llamar una variable de una funcion ya que esta no esta en el scope global y solo pertenece
// al scope local de la función
surName;