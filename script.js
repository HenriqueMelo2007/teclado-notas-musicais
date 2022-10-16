// Botões das notas musicais
const notaDo = document.querySelector('.nota-musical-do')
const notaRe = document.querySelector('.nota-musical-re')
const notaMi = document.querySelector('.nota-musical-mi')
const notaFa = document.querySelector('.nota-musical-fa')
const notaSol = document.querySelector('.nota-musical-sol')
const notaLa = document.querySelector('.nota-musical-la')
const notaSi = document.querySelector('.nota-musical-si')

// Áudios das notas musicais
const audioDo = document.querySelector('.audio-do')
const audioRe = document.querySelector('.audio-re')
const audioMi = document.querySelector('.audio-mi')
const audioFa = document.querySelector('.audio-fa')
const audioSol = document.querySelector('.audio-sol')
const audioLa = document.querySelector('.audio-la')
const audioSi = document.querySelector('.audio-si')

notaDo.addEventListener('click', () => tocarAudio(notaDo, audioDo));
notaRe.addEventListener('click', () => tocarAudio(notaRe, audioRe))
notaMi.addEventListener('click', () => tocarAudio(notaMi, audioMi))
notaFa.addEventListener('click', () => tocarAudio(notaFa, audioFa))
notaSol.addEventListener('click', () => tocarAudio(notaSol, audioSol))
notaLa.addEventListener('click', () => tocarAudio(notaLa, audioLa))
notaSi.addEventListener('click', () => tocarAudio(notaSi, audioSi))

function buttonStyle (tecla) {
  tecla.classList.remove('button-style-click')
}

function tocarAudio (tecla, audio) {
  tecla.classList.add('button-style-click')
  audio.play()
  
  setTimeout(() => buttonStyle(tecla), 900)
}