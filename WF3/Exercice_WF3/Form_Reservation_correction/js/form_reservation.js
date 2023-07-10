let plat = $("#plat");
let dessert = $("#dessert");
let ht = $("#ht");
let ttc = $("#ttc");


plat.on('change', () =>{
    var platChoix = plat.val();
    var prixplat = 0;
    var dessertChoix = dessert.val();
    var prixDessert = 0;

    switch(platChoix){ // $("#plat").val()
        case "Thiebou":
            prixplat = 15;
            break;
        case "Salade":
            prixplat = 12;
            break;
        case "Sushi":
            prixplat = 11;
            break;
        case "Filets":
            prixplat = 9;
            break;
        default:
            prixplat = 0;
            break;
    }

    if(dessertChoix == "Churros"){ // $("#dessert").val()
        prixDessert = 15;
    }
    else if(dessertChoix == "Biscuits"){
        prixDessert = 12;
    }
    else if(dessertChoix == "Buche"){
        prixDessert = 11;
    }
    else if(dessertChoix == "Gateau"){
        prixDessert = 9;
    }else{
        prixDessert = 0;
    }

    calculPrix(prixplat, prixDessert);
    
});

dessert.on('change', () =>{
    var platChoix = plat.val();
    var prixplat = 0;

    var dessertChoix = dessert.val();
    var prixDessert = 0;

    switch(platChoix){
        case "Thiebou":
            prixplat = 15;
            break;
        case "Salade":
            prixplat = 12;
            break;
        case "Sushi":
            prixplat = 11;
            break;
        case "Filets":
            prixplat = 9;
            break;
        default:
            prixplat = 0;
            break;
    }

    if(dessertChoix == "Churros"){
        prixDessert = 15;
    }
    else if(dessertChoix == "Biscuits"){
        prixDessert = 12;
    }
    else if(dessertChoix == "Buche"){
        prixDessert = 11;
    }
    else if(dessertChoix == "Gateau"){
        prixDessert = 9;
    }else{
        prixDessert = 0;
    }

    calculPrix(prixplat, prixDessert);
    
});

//CHAT 
// var plat = $("#plat").get(0);
// var childNode = $(plat).children().eq(1);

// var enfantsPlat = plat.children().eq(1)
var enfantsPlat = plat.children(); // au lieu de childNode

var thieb = 15;

// Prix HT + Montant TVA = Prix TTC
// Prix HT = Prix TTC ÷ (1 + Taux de TVA)



function calculPrix (tarifPlat, tarifDessert){
    var PrixHT = Number(tarifPlat) + Number(tarifDessert);
    var prixTTC = PrixHT * 1.2 ;
    prixTTC = prixTTC.toFixed(2);
    console.log(PrixHT, prixTTC);

    ht.val(PrixHT);
    ttc.val(prixTTC);
}


$("#valider").on("click", (e) => {
    e.preventDefault();
    
    if ($("#nom").val() == "") {
        $("#nom").css({
            borderColor: "red"
        });
    } else {
        $("#nom").css({
            borderColor: "black"
        });
    }

    if ($("#email").val() == "") {
        $("#email").css({
            borderColor: "red"
        });
    } else {
        $("#email").css({
            borderColor: "black"
        });
    }

    if ($("#tel").val() == "") {
        $("#tel").css({
            borderColor: "red"
        });
    } else {
        $("#tel").css({
            borderColor: "black"
        });
    }

    if (!$("#condition").is(":checked")) {
        $("#cdg").css({
            color: "red"
        });
    } else {
        $("#cdg").css({
            color: "black"
        });
    }
});