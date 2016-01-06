/* global base */

var aktuelleFarbe = 'yellow';

function einwerfen(spalte) {
  base.setColor(spalte, 3, aktuelleFarbe);
  spielerWechseln();
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
  chipsLoeschen()
  base.setControlColor(aktuelleFarbe);  
}