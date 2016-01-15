/* global anzeige */

var aktuelleFarbe = 'yellow';

var spalten = 8;
var zeilen = 8;

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
    anzeige.zeigeGewonnen(aktuelleFarbe);
    deaktiviereAlleButton();
  } else {
    console.log("noch nicht gewonnen, weitermachen ...");
  }
}

function deaktiviereAlleButton() {
  for(var spalte = 0; spalte < spalten; spalte++) {
    anzeige.deaktiviereButton(spalte);
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
  return hatHorizontalGewonnen(spielfeld)
          || hatVertikalGewonnen(spielfeld)
          || hatDiagonalRunterGewonnen(spielfeld)
          || hatDiagonalRaufGewonnen(spielfeld)
}

function hatVertikalGewonnen(spielfeld) {
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
      if (wievielGleiche == 4) {
        console.log("vertikal gewonnen!!!!!");
        return true;
      }
    }
  }
  return false; 
}

function hatHorizontalGewonnen(spielfeld) {
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
      if (wievielGleiche == 4) {
        console.log("horizontal gewonnen!!!!!");
        return true;
      }
    }
  }
  return false;
}

function hatDiagonalRunterGewonnen(feld) {
  for(var s = 0; s < spalten - 3; s++) {
    for(var z = 0; z < zeilen - 3; z++) {
      var wert = feld[s][z];
      if (wert != null &&
          wert == feld[s+1][z+1] &&
          wert == feld[s+2][z+2] &&
          wert == feld[s+3][z+3]) {
        console.log("diagonal runter gewonnen!!!!!");
        return true;
            
      }
    }
  }
}

function hatDiagonalRaufGewonnen(feld) {
  for(var s = 0; s < spalten - 3; s++) {
    for(var z = 3; z < zeilen; z++) {
      var wert = feld[s][z];
      if (wert != null &&
          wert == feld[s+1][z-1] &&
          wert == feld[s+2][z-2] &&
          wert == feld[s+3][z-3]) {
        console.log("diagonal rauf gewonnen!!!!!");
        return true;
            
      }
    }
  }
}