const tempoInput = document.getElementById('tempo');
const toggleButton = document.getElementById('toggleButton');

let isPlaying = false;
let timerId = null;

// https://www.geeksforgeeks.org/javascript/web-audio-api/
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playClick() {
  const osc = audioContext.createOscillator();

  osc.frequency.value = 700;
  osc.connect(audioContext.destination);

  osc.start();
  osc.stop(audioContext.currentTime + 0.05);
  return
}


toggleButton.addEventListener('click', toggleMetronome);

function toggleMetronome() {
  if (!isPlaying) {
    const bpm = Number(tempoInput.value);
    const intervalle = (60 / bpm) * 1000; // On calcule l'intervalle en ms : pour 120 BPM, l'intervalle = 500 ms

    playClick();
    timerId = setInterval(playClick, intervalle);

    toggleButton.textContent = "Arrêter";
    isPlaying = true;
    return
  } else {
    clearInterval(timerId);
    toggleButton.textContent = "Lancer";
    isPlaying = false;
    return
  }
}