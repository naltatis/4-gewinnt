/* global base */

function insertChip(row) {
  //base.setColor(2, 1, 'red');
  alert("Chip eingeworfen");
}

function resetCells() {
  for(var x = 0; x <= 3; x++) {
    for(var y = 0; y <= 3; y++) {
      base.removeColor(x, y);
    }    
  }
}

function newGame() {
  resetCells()
  base.setControlColor('red');  
}