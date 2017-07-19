function animateHeader(){
  var x=0
  while(x<100){
    $('h1').animate(
      {"margin-left": "100px"},
      {"margin-right": "100px"}
    );
    x++;
  }
}
function setup(){
  $("h1").click(animateHeader);
}
$(document).ready(setup);
