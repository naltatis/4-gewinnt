/* global base */

var aktuelleFarbe = 'yellow';

var zaehler = [0,0,0,0];

function einwerfen(spalte) {
  var zeile = naechsteFreieZeile(spalte);
  base.setColor(spalte, zeile, aktuelleFarbe);
  zaehler[spalte] += 1;
  spielerWechseln();
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
}