var myAudio = document.getElementById("musica");
myAudio.volume = 0.5;

  function musica() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
  }