var numRandom = Math.round(Math.random()*10);
var i = 0;
var c = 3;

window.alert("Vamos a adivinar un número generado aleatoriamente, tenemos 4 intentos.");

do {
    i++;

    var numUser = window.prompt("Introduzca un número, por favor.");

    if (numUser == numRandom) {

        window.alert("Adivinado, el número aleatorio es " + numRandom + ". Has ganado.");
        i = 5;

    } else {

        if (numRandom < numUser) {

            window.alert("Debes introducir un número menor.")

        } else {

            window.alert("Debes introducir un número mayor.")

        }

        window.alert("Te quedan " + c + " intentos.");

        if (i==4) {

            window.alert("Has perdido.");

        }

    }

    c--;


} while(i < 4) ;
