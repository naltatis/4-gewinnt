/* global base */

var aktuelleFarbe = 'yellow';

var zaehler = [0,0,0,0];
var spielfeld = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null]
];

function einwerfen(spalte) {
  var zeile = naechsteFreieZeile(spalte);
  base.setColor(spalte, zeile, aktuelleFarbe);
  spielfeld[spalte][zeile] = aktuelleFarbe;
  zaehler[spalte] += 1;
  pruefeObGewonnen();
  spielerWechseln();
}

function pruefeObGewonnen() {
  if (hatGewonnen(spielfeld)) {
    alert("spieler " + aktuelleFarbe + " hat gewonnen!");
  } else {
    console.log("noch nicht gewonnen, weitermachen ...");
  }
}

function naechsteFreieZeile(spalte) {
  return 3 - zaehler[spalte];
}

function spielerWechseln() {
  aktuelleFarbe = aktuelleFarbe == 'yellow' ? 'red' : 'yellow';
  base.setControlColor(aktuelleFarbe);
}

function chipsLoeschen() {
  for(var x = 0; x <= 3; x++) {
    for(var y = 0; y <= 3; y++) {
      base.removeColor(x, y);
    }    
  }
}

function neuesSpiel() {
  chipsLoeschen();
  base.setControlColor(aktuelleFarbe);  
  zaehler = [0,0,0,0];
  spielfeld = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
  ]
}


function hatGewonnen(spielfeld) {
  for(var zeile = 0; zeile <= 3; zeile++) {
    console.log("-- neue zeile --");
    var vorherigesFeld = null;
    var wievielGleiche = 0;
    for(var spalte = 0; spalte <= 3; spalte++) {
      var feld = spielfeld[spalte][zeile];
      if (feld != vorherigesFeld || feld == null) {
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