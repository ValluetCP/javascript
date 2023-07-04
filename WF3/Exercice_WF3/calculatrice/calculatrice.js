let nombre1 = document.getElementById('nb1');
let btnPlus = document.getElementById('plus');
let btnMoins = document.getElementById('moins');
let btnMult = document.getElementById('mult');
let btnDivision = document.getElementById('division');
let nombre2 = document.getElementById('nb2');
let btnEgal = document.getElementById('egal');
let resultat = document.getElementById("resultat");

let operateur= "+";

btnPlus.addEventListener('click', () => {
    operateur= "+";
});

btnMoins.addEventListener('click', () => {
    operateur= "-";
});

btnMult.addEventListener('click', () => {
    operateur= "*";
});

btnDivision.addEventListener('click', () => {
    operateur= "/";
});

btnEgal.addEventListener('click', () => {
    let num1 = parseFloat(nombre1.value);
    let num2 = parseFloat(nombre2.value);
    let result;

    if (operateur === "+") {
        result = num1 + num2;
    } else if (operateur === "-") {
        result = num1 - num2;
    } else if (operateur === "*") {
        result = num1 * num2;
    } else if (operateur === "/") {
        result = num1 / num2;
    }

    resultat.value = result;
});