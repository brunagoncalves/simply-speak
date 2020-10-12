const utterance = new SpeechSynthesisUtterance();

utterance.lang = 'pt-BR';
utterance.rate = 1;

function speak() {
  speechSynthesis.speak(utterance);
}

function stop() {
  speechSynthesis.cancel();
  document.getElementById('clean').innerHTML = 'Seu Texto aqui!';
}

function setText(event) {
  utterance.text = event.target.innerText;
}

function cleanText() {
  document.getElementById('clean').innerHTML = '';
}
