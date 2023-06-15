var an = prompt("Ecrivez un mois").toLowerCase();

var mois = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "octobre",
  "novembre",
  "decembre",
];

var trente = ["30", "31", "28"];

function annee(year, month, bisextile) {
  switch (year) {
    case month[0]:
      document.write(`${month[0]} comporte ${bisextile[1]} jours`);
      break;
    case month[1]:
      document.write(`${month[1]} comporte ${bisextile[2]} jours`);
      break;
    case month[2]:
      document.write(`${month[2]} comporte ${bisextile[1]} jours`);
      break;
    case month[3]:
      document.write(`${month[3]} comporte ${bisextile[0]} jours`);
      break;
    case month[4]:
      document.write(`${month[4]} comporte ${bisextile[1]} jours`);
      break;
    case month[5]:
      document.write(`${month[5]} comporte ${bisextile[0]} jours`);
      break;
    case month[6]:
      document.write(`${month[6]} comporte ${bisextile[1]} jours`);
      break;
    case month[7]:
      document.write(`${month[7]} comporte ${bisextile[0]} jours`);
      break;
    case month[8]:
      document.write(`${month[8]} comporte ${bisextile[1]} jours`);
      break;
    case month[9]:
      document.write(`${month[9]} comporte ${bisextile[0]} jours`);
      break;
    case month[10]:
      document.write(`${month[10]} comporte ${bisextile[1]} jours`);
      break;
    case month[11]:
      document.write(`${month[11]} comporte ${bisextile[0]} jours`);
      break;
    default:
      while (!isNaN(an) || an < 0) {
        an = prompt("Veuillez écrire un mois correct");
      }
  }
}

annee(an, mois, trente);
