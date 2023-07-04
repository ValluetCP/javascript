
// Version simplifiée

// $("#loginForm").on('submit', (e) => {
//     // e.preventDefault();
//     if ($('#username').val() == "" || $('#password').val() == "" ){
//       $('#errorMessage').text("Veuillez remplir tous les champs");
//       e.preventDefault();
//     }
//   })


// Version avec plusieurs conditions

  $("#loginForm").on('submit', (e) => {
    // e.preventDefault();
    if ($('#username').val() == "" && $('#password').val() == "" ){
      $('#errorMessage').text("Veuillez remplir tous les champs");
      e.preventDefault();
    }
    else if ($('#username').val() == ""){
        $('#errorMessage').text("Veuillez saisir votre identifiant");
      e.preventDefault();
    }
    else if ($('#password').val() == ""){
        $('#errorMessage').text("Veuillez saisir votre mot de passe");
      e.preventDefault();
    }
    
  })