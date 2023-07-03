// var bouton = document.getElementById("valid"); // Sélection du bouton
//  bouton.addEventListener('click', direBonjour);

//  function direBonjour(){
//     var message = document.getElementById('init').value;
//     document.getElementById("Faire les courses").textContent = "" + message;
//     }

let todoList = document.getElementById('todo');
let bouton = document.getElementById('valid');
let stockage = document.getElementById('todoList');

bouton.addEventListener('click', addTodo);

function addTodo(){
    // recuperer la valeur du input
    let val = todoList.value;
    // creer un paragraphe
    let p = document.createElement("p");
    // ajouter le contenu du input dans le paragraphe
    p.textContent = val;
    // ajouter le paragraphe dans la div
    stockage.appendChild(p);
    // p.addEventListener('click', () => color(p));

    p.addEventListener('click', () => {
        p.style.color = "red";
    });
}




// function addTodo(){
//     // recuperer la valeur du input
//     let val = todoList.value;
//     // creer un paragraphe
//     let p = document.createElement("p");
//     // ajouter le contenu du input dans le paragraphe
//     p.textContent = val;
//     // ajouter le paragraphe dans la div
//     stockage.appendChild(p);
//     p.addEventListener('click', () => color(p));
// }

// function color(p){
//     p.style.color = "red";
// }







