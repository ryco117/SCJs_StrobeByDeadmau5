// Get elements
var slider = document.getElementById("myRange");
var output = document.getElementById("volumeText");
var audio = chrome.extension.getBackgroundPage().audio;

// Initialize values
var volume = Math.floor(audio.volume * 100.0);
slider.value = volume;
output.innerHTML = volume;

// Update
slider.oninput = function() {
  output.innerHTML = this.value;
  audio.volume = this.value / 100.0;
}

