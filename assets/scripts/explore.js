// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const imageElement = document.querySelector('img');
  let synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.value = i;
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(textArea.value);
    utterance.voice = voices[voiceSelect.value];
    utterance.onstart = () => {
      imageElement.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      imageElement.src = 'assets/images/smiling.png';
    };
    synth.speak(utterance);
  });
}
