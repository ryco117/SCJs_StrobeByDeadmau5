// Get elements
var slider = document.getElementById("myRange");
var output = document.getElementById("volumeText");
var audio = chrome.extension.getBackgroundPage().audio;

// Initialize values
var volume = audio.volume * 100.0;
if(volume != 10.37) volume = Math.floor(volume);
slider.value = volume;
output.innerHTML = volume;

// Update
slider.oninput = function() {
  var volume = this.value;
  if(volume != 10.37) volume = Math.floor(volume);
  output.innerHTML = volume;
  audio.volume = volume / 100.0;
}

