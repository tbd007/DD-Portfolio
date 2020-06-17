var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


var TIMEOUT = 10000;
 
var interval = setInterval(handleNext, TIMEOUT);
 
function handleNext() {
 
  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');
 
  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;
 
  $radios
    .attr('checked', false);
 
  if (currentIndex >= radiosLength - 1) {
 
    $radios
      .first()
      .attr('checked', true);
 
  } else {
 
    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);
 
  }
 
}
