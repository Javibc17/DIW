const audio = document.querySelector('audio')
const bajarVolumenBtn = document.getElementById('bajarVolumen')
const subirVolumenBtn = document.getElementById('subirVolumen')
const muteBtn = document.getElementById('mute')
const pasarCancionBtn = document.getElementById('pasarCancion')
const lyricsElement = document.querySelector('h1') 


const canciones = [
    {music: "./music/gonzyMontana.mp3", background: "./img/gonzy-montana.png", h1: "GONZY MONTANA"},
    {music: "./music/friki.mp3", background: "./img/friki-gonzy.png", h1: "GONZY-FRIKI"},
    {music: "./music/erotica.mp3", background: "./img/Erotica.png", h1: "GONZY-EROTICAAA"}
]

let SongIndex = 0 
audio.volume = 0.5


function cambiarCancion() {
    let SongIndex = Math.floor(Math.random() * canciones.length)
      
    document.body.style.backgroundImage = `url(${canciones[SongIndex].background})`
    console.log(canciones[SongIndex].background)
    
    lyricsElement.textContent = canciones[SongIndex].h1
    audio.src = canciones[SongIndex].music
    
    audio.play()
}

function bajarVolumen() {
    if (audio.volume > 0) {
        audio.volume = Math.max(0, audio.volume - 0.1) 
    }
}

function subirVolumen() {
    if (audio.volume < 1) {
        audio.volume = Math.min(1, audio.volume + 0.1) 
    }
}

function mute() {
    audio.muted = !audio.muted
    if (audio.muted) {
        muteBtn.textContent = "Unmute"
    } else {
        muteBtn.textContent = "Mute"
    }
}

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            subirVolumen()
            break
        case 'ArrowDown':
            bajarVolumen()
            break
        case 'ArrowRight':
            cambiarCancion()
            break
        case 'ArrowLeft':
            cambiarCancion()
            break
        case ' ':
            mute()
            break
        default:
            break
    }
})

bajarVolumenBtn.addEventListener('click', bajarVolumen)
subirVolumenBtn.addEventListener('click', subirVolumen)
muteBtn.addEventListener('click', mute)
pasarCancionBtn.addEventListener('click', cambiarCancion)