
var n = null;
var x = "x";
var o = "o";

var feldHorizontal1 = [
  [n,n,x,x],
  [n,n,o,x],
  [n,n,x,x],
  [n,n,o,o]
];

function hatGewonnen(spielfeld) {
  for(var zeile = 0; zeile <= 3; zeile++) {
    console.log("-- neue zeile --");
    var vorherigesFeld = null;
    var wievielGleiche = 0;
    for(var spalte = 0; spalte <= 3; spalte++) {
      var feld = feldHorizontal1[spalte][zeile];
      if (feld != vorherigesFeld || feld == n) {
        vorherigesFeld = feld;
        wievielGleiche = 1;
      } else {
        wievielGleiche++;
      }
      
      console.log(
        "s", spalte,
        "z", zeile,
        "feld", feld,
        "vorherigesFeld", vorherigesFeld,
        "wievielGleiche", wievielGleiche
      );
      if (wievielGleiche == 3) {
        console.log("GEWONNEN!!!!!");
        return true;
      }
    }
  }
  return false;
}
