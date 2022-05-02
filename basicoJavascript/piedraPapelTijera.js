function validación (jugador, cpu){
    if (jugador === cpu){
        console.log("empate")
    }else if (jugador == 1 && cpu == 3){//piedra tijera
        console.log("gano")
    }else if(jugador == 1 && cpu == 2){//piedra papel
        console.log("perdio")    
    }else if (jugador == 2 && cpu == 1){//papel piedra
        console.log("gano")
    }else if (jugador == 2 && cpu == 3){// papel tijera
        console.log("perdio")
    }else if(jugador == 3 && cpu == 2){// tijera papel
        console.log("gano")
    }else if(jugador == 3 && cpu == 1){// tijera piedra
        console.log("perdio")
    }
                  
}

// var jugador = 1;
// var cpu = 1;

var jugador = Number(prompt())
var cpu = Math.floor(Math.random() * (4 - 1)) + 1;// trae un numero aleatorio para 
console.log(cpu)

validación(jugador, cpu);




// piedra 1
// papel 2
// tijera 3
