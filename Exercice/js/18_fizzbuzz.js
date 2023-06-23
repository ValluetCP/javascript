// // Solution utilisant une série de if/else
// for (var nombre = 1; nombre <= 100; nombre++) {
//     if ((nombre % 3 === 0) && (nombre % 5 === 0)) console.log("FizzBuzz");
//     else if (nombre % 3 === 0) console.log("Fizz");
//     else if (nombre % 5 === 0) console.log("Buzz");
//     else console.log(nombre);
// }


for (var i = 1; i<=100; i++){
    if(( i % 3 == 0) && ( i % 5 == 0)){
        document.write("FizzBuzz <br>");
    }
    else if( i % 3 == 0){
        document.write("Fizz <br>");
    }
    else if(i % 5 == 0){
        document.write("Buzz <br>");
    }
    else{
        document.write(i + "<br>");
    }
}


// for (var i = 1; i<=100; i++){
    
//     if( i % 3 === 0){
//         document.write("Fizz <br>");
//     }
//     else if(i % 5 === 0){
//         document.write("Buzz <br>");
//     }
//     else if(( i % 3 === 0) && ( i % 5 === 0)){
//         document.write("FizzBuzz <br>");
//     }
//     else{
//         document.write(i + "<br>");
//     }
    
// }