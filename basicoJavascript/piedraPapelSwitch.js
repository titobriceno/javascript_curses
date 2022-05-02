
// // la sentencia switch se puede anidar, esta permite que se realicen 2 comparaciones, aunque a mi forma de ver es un código extenso y confuso


// function validar(){
    
//     switch(jugador){
//         case 1:
//             switch(cpu){  //en este swuitch se realiza la anidacion.
//                 case 1:
//                     console.log("empate")
//                     break;
//                 case 2: 
//                     console.log("Pierdes")
//                     break;
//                 case 3: 
//                     console.log("ganas")
//                     break;
//             }
//             break;
//         case 2:
//             switch(cpu){
//                 case 1:
//                     console.log("ganas")
//                     break;
//                 case 2:
//                     console.log("empate")
//                     break;
//                 case 3:
//                     console.log("pierdes") 
//                     break;
//             }
//             break;

//         case 3:
//             switch(cpu){
//                 case 1:
//                     console.log("pierdes")
//                     break;
//                 case 2: 
//                     console.log("ganas")
//                     break;
//                 case 3:
//                     console.log("empate")
//                     break;
            
//             }
//             break;
//     }

// }


function validar(){
    switch(true){// aca el switch recibe una sentenci de verdadero, por tanto validara la opecion que sea verdadera.
        case (jugador == cpu)://si se cumple la condición del caso retorna, en este caso ambos iguales.
            console.log("empate")
            break;
        case (jugador == 1 && cpu == 2):
            console.log("perdio")
            break;
        case (jugador == 2 && cpu == 1):
            console.log("gano")
            break;
        case (jugador == 2 && cpu == 3):
            console.log("perdio")
            break;
        case (jugador == 3 && cpu == 2):
            console.log("gano")
            break;
        case (jugador == 3 && cpu == 1):
            console.log("perdio")
            break;
        case (jugador ==1 && cpu == 3):
            console.log("gano")
            break;
        

    }
}

console.log("bienvenido a piedra papel y tijera")
console.log("seleciones para piedra: 1 , para papel: 2 y para tijera 3.")
console.log("Digite una opcion")

var jugador = Number(prompt())
var cpu = Math.floor(Math.random() * (4 - 1)) + 1;
validar();


// piedra 1
// papel 2
// tijera 3


