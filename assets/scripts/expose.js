// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const imageElement = document.querySelector('img');

  hornSelect.addEventListener('change', () => {
    let hornValue = hornSelect.value;
    audioElement.src = `assets/audio/${hornValue}.mp3`;
    imageElement.src = `assets/images/${hornValue}.svg`;
    imageElement.alt = hornValue;
  });
  playButton.addEventListener('click', () => {
    if (audioElement.src) {
      audioElement.play();
  
      if (hornSelect.value === 'party-horn') {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
      }
    }
  });
  volumeSlider.addEventListener('input', () => {
    let volumeValue = volumeSlider.value;
    audioElement.volume = volumeValue / 100;
  
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });
}
