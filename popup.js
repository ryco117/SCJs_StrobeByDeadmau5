// Get elements
var slider = document.getElementById("myRange");
var checkbox = document.getElementById("mute");
var outputText = document.getElementById("volumeText");
var bg = chrome.extension.getBackgroundPage();
var audio = chrome.extension.getBackgroundPage().audio;

// Initialize values
var volume = bg.setVolume * 100.0;
if(volume != 10.37) volume = Math.floor(volume);
slider.value = volume;
outputText.innerHTML = volume;
checkbox.checked = bg.mute;

// Update
slider.oninput = function() {
  var volume = this.value;
  if(volume != 10.37) volume = Math.floor(volume);
  outputText.innerHTML = volume;
  volume /= 100.0;
  bg.setVolume = volume;
  audio.volume = bg.mute ? 0 : volume;
}
checkbox.oninput = function() {
  bg.mute = this.checked;
  audio.volume = bg.mute ? 0 : bg.setVolume;
}

