var id = null;
function myMove() {
  var elem = document.getElementById("boat");
  var pos = -50;
  var elStyle = window.getComputedStyle(elem);
  var rightValue = elStyle.getPropertyValue("right").replace("px","")
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 1250) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }

}
myMove();