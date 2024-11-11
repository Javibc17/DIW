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

function cambiarCancion() {
    let SongIndex = Math.floor(Math.random() * canciones.length);
      
    document.body.style.backgroundImage = `url(${canciones[SongIndex].background})`;
    console.log(canciones[SongIndex].background);
    
    lyricsElement.textContent = canciones[SongIndex].h1;
    audio.src = canciones[SongIndex].music;
    
    audio.play();
}

pasarCancionBtn.addEventListener('click', cambiarCancion)