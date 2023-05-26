var nb1 = prompt();
console.log(typeof nb1);
//  isNaN(); ( si ce n'est pas une valeur numerique)
// si c'est un string, ça rentre dans la condition 1
if ( isNaN(nb1)) {
    document.write("on ne prend pas en compte les string");
    console.log("on ne prend pas en compte les string");
} else {
    var nb2 = 5;
    document.write(nb1);
    var nb3 = (nb1 / nb2);
    console.log(nb3);
    document.write( "<br>" + "le prix avec tva et "+ nb3);
} 

// si c'est un number rentre dans la condition 1
// if ( Number(nb1)) {
//     var nb2 = 5;
//     document.write(nb1);
//     var nb3 = ((nb1 / nb2) + nb1);
//     console.log(nb3);
//     document.write( "<br>" + "le prix avec tva et "+ nb3);
// } else {
//     document.write("on ne prend pas en compte les string");
//     console.log("on ne prend pas en compte les string");
// }