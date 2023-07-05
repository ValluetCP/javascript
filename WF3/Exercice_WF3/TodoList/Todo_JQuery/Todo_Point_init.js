// // pour recuperer le bouton
// let btn = document.getElementById("add_todo"); 
// // pour recuperer le input
// let todo = document.getElementById('todo'); 
// // pour recuperer la div ou on va ajouter les todos
// let todoList = document.getElementById("todolist"); 

// // ecouter le click sur le bouton
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // recuperer la valeur du input
//     let val = todo.value;
//     // creer un paragraphe
//     let p = document.createElement("p");
//     // ajouter le contenu du input dans le paragraphe
//     p.textContent = val;
//     // ajouter le paragraphe dans la div
//     todoList.appendChild(p);
//     // ecouter le 
//     p.addEventListener('click', () => {
//         p.style.color = "red";
//         p.style.fontSize = "2em";
//         // if (p.style.color == "red") {
//         //     p.style.color = "blue";
//         // } else {
//         //     p.style.color = "red";
//         // }
//     });
// });


// let btn = $("#add_todo");
// let todo = $("#todo");
// let todoList = $("#todoList");

$("#add_todo").on("click",(e) =>{
    e.preventDefault();
    // récupérer la valeur du input
    $("#todo").val();
    // let val = todo.val();
    // créer un paragraphe
    let p = $("<p></p>");
    // ajouter le contenu du input dans le paragraphe
    // p.text($('#todo').val());
    p = $("<p></p>").text($('#todo').val());
    $("#todoList").append(p);

    p.on('click', () =>{
        p.toggleClass('maClasse');
    // $('p').on('click', () =>{
    //     p.toggleClass('maClasse');
    })
    
    

})








// $("#valid").on("click", (e) => {
//     e.preventDefault();
    
//     // recuperer la valeur du input
//     $("#todo").val();
//     // creer un paragraphe
//     $("#todoList").html("<p></p>");
//     // ajouter le contenu du input dans le paragraphe
//     // $("p").text($('#todo').val());
//     $("<p></p>").text($('#todo').val());

// })



