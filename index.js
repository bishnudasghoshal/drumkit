
for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", playDrum);

  function playDrum() {

    var sound = this.innerHTML;

    if (sound == "w") {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    }
    else if (sound == "a") {
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    }
    else if (sound == "s") {
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    }
    else if (sound == "d") {
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    }
    else if (sound == "j") {
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    }
    else if (sound == "k") {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    }
    else if (sound == "l") {
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    }

  }
}
