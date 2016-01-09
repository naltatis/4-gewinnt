/* global anzeige */

var aktuelleFarbe = 'yellow';

var spalten = 4;
var zeilen = 4;

var zaehler = [0];
var spielfeld = [[]];

function einwerfen(spalte) {
  var zeile = naechsteFreieZeile(spalte);
  anzeige.chipSetzen(spalte, zeile, aktuelleFarbe);
  spielfeld[spalte][zeile] = aktuelleFarbe;
  zaehler[spalte] += 1;
  console.table(spielfeld);
  pruefeObGewonnen();
  spielerWechseln();
}

function pruefeObGewonnen() {
  if (hatGewonnen(spielfeld)) {
    alert("Spieler " + aktuelleFarbe + " hat gewonnen!");
    neuesSpiel()
  } else {
    console.log("noch nicht gewonnen, weitermachen ...");
  }
}

function naechsteFreieZeile(spalte) {
  return 3 - zaehler[spalte];
}

function spielerWechseln() {
  aktuelleFarbe = aktuelleFarbe == 'yellow' ? 'red' : 'yellow';
  anzeige.spielerSetzen(aktuelleFarbe);
}


function neuesSpiel() {
  anzeige.neuesSpielfeld(spalten, zeilen);
  anzeige.spielerSetzen(aktuelleFarbe);
  zaehler = [0,0,0,0];
  spielfeld = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
  ]
}

function hatGewonnen(spielfeld) {
  console.log("prüfe ob gewonnen ...")
  return hatHorizontalGewonnen(spielfeld) || hatVertikalGewonnen(spielfeld)
}

function hatVertikalGewonnen(spielfeld) {
  console.log("... vertikal")
  for(var spalte = 0; spalte <= 3; spalte++) {
    var vorherigesFeld = null;
    var wievielGleiche = 0;
    for(var zeile = 0; zeile <= 3; zeile++) {
      var feld = spielfeld[spalte][zeile];
      if (feld != vorherigesFeld || feld == null) {
        vorherigesFeld = feld;
        wievielGleiche = 1;
      } else {
        wievielGleiche++;
      }
      if (wievielGleiche == 3) {
        console.log("GEWONNEN!!!!!");
        return true;
      }
    }
  }
  return false; 
}

function hatHorizontalGewonnen(spielfeld) {
  console.log("... horizontal")
  for(var zeile = 0; zeile <= 3; zeile++) {
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
      if (wievielGleiche == 3) {
        console.log("GEWONNEN!!!!!");
        return true;
      }
    }
  }
  return false;
}