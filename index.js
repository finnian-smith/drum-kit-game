
// detecting button press
var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {

    var trigger = this.innerHTML.toLowerCase();

    playSound(trigger);
    animate(trigger);

  });
}


// detecting key press (add listener to entire document)
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  animate(event.key);
});


// plays sound based on trigger passed
function playSound(trigger) {

  var sound;

  switch (trigger) {
    case 'w':
      sound = new Audio("sounds/tom-1.mp3");
      break;
    case 'a':
      sound = new Audio("sounds/tom-2.mp3");
      break;
    case 's':
      sound = new Audio("sounds/tom-3.mp3");
      break;
    case 'd':
      sound = new Audio("sounds/tom-4.mp3");
      break;
    case 'j':
      sound = new Audio("sounds/snare.mp3");
      break;
    case 'k':
      sound = new Audio("sounds/crash.mp3");
      break;
    case 'l':
      sound = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      break;
  }

  sound.play();

}


// animate buttons once clicked/pressed
function animate(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
