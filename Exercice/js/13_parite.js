// ---------------------- Exercices - 1 ----------------------- //

// for (var i=1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i + " est un nombre pair")
//     }
//     else if (i % 2 !== 0){
//         console.log(i + " est un nombre impair")
//     }
// }

// ---------------------- Exercices - 2 Test ----------------------- //

// var nombre = prompt("saisissez un nombre");

// if (nombre % 2 === 0){
//     console.log(nombre + " est un nombre pair");
// } else if (nombre % 2 !== 0){
//     console.log(nombre + " est un nombre impair");
// }


// ---------------------- Exercices - 2 ----------------------- //

var nombre = parseInt(prompt("saisissez un nombre"));

while(isNaN(nombre) || (nombre >= 11)){
    nombre = prompt("saisissez un nombre");
}

while (nombre <= 10){
    if (nombre % 2 === 0){
        document.write(nombre + " est un nombre pair <br>");
    } else if (nombre % 2 !== 0){
        document.write(nombre + " est un nombre impair <br>");
    }
    nombre++;
}

