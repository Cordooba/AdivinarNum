var numRandom = Math.round(Math.random()*10);

window.alert("Vamos a adivinar un número generado aleatoriamente, tenemos 4 intentos.");


    for(var i = 3; i >= 0 ; i--) {

        var numUser = window.prompt("Introduzca un número, por favor.");

        if (numUser == numRandom) {

            window.alert("Adivinado, el número aleatorio es "+numRandom+". Has ganado.");
            i = 0;

        }else{

                if(numRandom < numUser){

                    window.alert("Debes introducir un número menor.")

                }else{

                    window.alert("Debes introducir un número mayor.")

                }

            window.alert("Te quedan "+i+" intentos.");

            if(i==0){

                window.alert("Has perdido.");

            }

        }

}