var moyenne = parseFloat(prompt("Quelle est ta moyenne au bac ?"));
while (isNaN(moyenne) || moyenne < 0 || moyenne > 20) {
  moyenne = prompt("Veuillez indiquer une moyenne entre 0 et 20");
}
if (moyenne <= 9) {
  document.write("Résultat : t'es recalé");
} else if (moyenne >= 10 && moyenne < 12) {
  document.write("Résultat : t'es reçu");
} else if (moyenne >= 12 && moyenne <= 20) {
  document.write("Résultat :reçu avec mention");
}
