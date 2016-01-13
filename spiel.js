/* global anzeige */

var aktuelleFarbe = 'yellow';

var spalten = 10;
var zeilen = 10;

var zaehler = [0];
var spielfeld = [[]];

function einwerfen(spalte) {
  var zeile = naechsteFreieZeile(spalte);
  anzeige.chipSetzen(spalte, zeile, aktuelleFarbe);
  spielfeld[spalte][zeile] = aktuelleFarbe;
  zaehler[spalte] += 1;
  if (zaehler[spalte] == spalten) {
    anzeige.deaktiviereButton(spalte);
  }
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
  return (zeilen - 1) - zaehler[spalte];
}

function spielerWechseln() {
  aktuelleFarbe = aktuelleFarbe == 'yellow' ? 'red' : 'yellow';
  anzeige.spielerSetzen(aktuelleFarbe);
}


function neuesSpiel() {
  anzeige.neuesSpielfeld(spalten, zeilen);
  anzeige.spielerSetzen(aktuelleFarbe);
  zaehler = [];
  spielfeld = [];
  for (var spaltenNr = 0; spaltenNr < spalten; spaltenNr++) {
    spielfeld[spaltenNr] = [];
    zaehler[spaltenNr] = 0;
    for (var zeilenNr = 0; zeilenNr < zeilen; zeilenNr++) {
      spielfeld[spaltenNr][zeilenNr] = null;
    }
  }
}

function hatGewonnen(spielfeld) {
  console.log("prüfe ob gewonnen ...")
  return hatHorizontalGewonnen(spielfeld) || hatVertikalGewonnen(spielfeld)
}

function hatVertikalGewonnen(spielfeld) {
  console.log("... vertikal")
  for(var spalte = 0; spalte < spalten; spalte++) {
    var vorherigesFeld = null;
    var wievielGleiche = 0;
    for(var zeile = 0; zeile < zeilen; zeile++) {
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
  for(var zeile = 0; zeile < zeilen; zeile++) {
    var vorherigesFeld = null;
    var wievielGleiche = 0;
    for(var spalte = 0; spalte < spalten; spalte++) {
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