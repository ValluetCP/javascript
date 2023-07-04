
// Avec JQuery - version 

$('#dropdown').on('change', () => {
    if ($('#dropdown').val() == "Asterix"){
      $('#message').text("Je suis Asterix");
    }
    else if ($('#dropdown').val() == "Obelix"){
      $('#message').text("Je suis " + $('#dropdown').val());
    }
    else if ($('#dropdown').val() == "Idefix"){
      $('#message').text("Je suis " + $('#dropdown').val());
    }
});
