(function (window) {

  function getCell(spalte, zeile) {
    return document.querySelector('#field tr:nth-child('+(zeile+1)+') td:nth-child('+(spalte+1)+') span'); 
  }

  function chipLoeschen(spalte, zeile) {
    var cell = getCell(spalte, zeile);
    cell.classList.remove('red');
    cell.classList.remove('yellow');
  }

  function chipSetzen(spalte, zeile, farbe) {
    chipLoeschen(spalte, zeile);
    var cell = getCell(spalte, zeile);
    cell.classList.add(farbe);
  }

  function spielerSetzen(farbe) {
    var elements = document.querySelectorAll('#buttons th button');
    Array.prototype.forEach.call(elements, function(el, i) {
      el.classList.remove('red');
      el.classList.remove('yellow');
      el.classList.add(farbe);
    });
  }
  
  function buttonDeaktivieren(spalte) {
    return document.querySelector('#buttons th:nth-child('+(spalte+1)+') button').setAttribute("disabled", true);
  }
  
  function neuesSpielfeld(spalten, zeilen) {
    var field = "";
    for(var i = 0; i < zeilen; i++) {
      field += "<tr>";
      for(var j = 0; j < spalten; j++) {
        field += '<td><span class="ui circular label"></span></td>';
      }      
      field += "</tr>";
    }
    document.querySelector('#field').innerHTML = field;
    
    var buttons = '<tr>';
    for(var i = 0; i < spalten; i++) {
      buttons += '<th>' +
          '<button class="ui yellow icon button" onclick="einwerfen(' + i + ')">' +
            '<i class="arrow circle down icon"></i>' +
          '</button>' + 
        '</th>';
    }
    buttons += '</tr>';
    document.querySelector('#buttons').innerHTML = buttons;
  }

  
  window.anzeige = {
    neuesSpielfeld,
    chipSetzen,
    spielerSetzen,
    buttonDeaktivieren
  };

})(window)