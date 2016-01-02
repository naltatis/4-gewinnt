(function (window) {

  function getCell(x, y) {
    return document.querySelector('#field tr:nth-child('+(y+1)+') td:nth-child('+(x+1)+') span')  
  }

  function removeColor(x, y) {
    var cell = getCell(x, y);
    cell.classList.remove('red');
    cell.classList.remove('yellow');
  }

  function setColor(x, y, color) {
    removeColor(x, y);
    var cell = getCell(x, y);
    cell.classList.add(color);
  }

  function setControlColor(color) {
    var elements = document.querySelectorAll('#buttons th button');
    Array.prototype.forEach.call(elements, function(el, i){
      el.classList.remove('red');
      el.classList.remove('yellow');
      el.classList.add(color);
    });
  }
  
  window.base = {
    removeColor,
    setColor,
    setControlColor
  };

})(window)