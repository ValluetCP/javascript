
// Version JQuery 

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
    })

})


// Version JQuery - (avec la fonction .html)
// ATTENTION : écrase, sa valeur remplace ce qu'on avait fait précédemment. 

$("#add_todo").click(e => {

    e.preventDefault();
    let p = $("#todolist").html("<p>"+$("#todo").val()+"</p>");
    p.click( () => {

    // Ajouter du CSS (1ère méthode)

    // p.css("color", "red");
    // p.css("fontSize", "10em");

    
    // Ajouter du CSS (2ème méthode)

    p.css({
      "color": "red",
      "fontSize": "10em"
    });
   })
});


// Version JQuery - (avec la fonction .html)

$("#add_todo").click((e) => {

    e.preventDefault();
  
    let val = $("#todo").val();
  
    $("#todolist").append("<p>" + val + "</p>")
      .click((e) => {
    
    // Ajouter du CSS (1ère méthode)
        // p.css("color", "red");
        // p.css("fontSize", "10em");

    // Ajouter du CSS (2ème méthode)
        // e.target.style.color = "red";
        // e.target.style.fontSize = "10em";

    // Ajouter du CSS (3ème méthode)
        $(e.target).css({
          "color": "red",
          "font-size": "10em"
        })
      });
  });
