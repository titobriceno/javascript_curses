// la sentencia switch aunque se parece a un if el objetivo de esta es validar diversos casos, esta funcion es importante asignarle
//  la parala break para que una vez valide un caso positivo termine la iteración.
// esta sentencia también puede ir acompañáda una palabra reservada default para que si no cumple ninguno de los casos
// haga una accion que le indiquemos.

// ejemplo
var numero = 1;
// recibe como parametro la variable numero
switch (numero){
    // dentro de los corchetes se encuentra los casos
    case 1:
        console.log("soy un 1")
        break;
    case 2:
        console.log("soy un 2")
        break;
    case 3:
        console.log("soy un 3")
        break;
    default:
        console.log("no soy nada")
}// soy un 1

