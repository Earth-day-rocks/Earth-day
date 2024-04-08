var id = null;
function myMove() {
  var boat = document.getElementById("boat");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 200) {
      clearInterval(id);
    } else {
      pos++;
      boat.style.left = pos + 'px';
    }
  }
}

function clickTrash(){
  const trash = document.getElementById("trash");
  trash.addEventListener("click", function(e) {
    console.log("The button was clicked");
  });

}
myMove();
clickTrash();