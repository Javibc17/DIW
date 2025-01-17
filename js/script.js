const spanCont = document.getElementById("spanCont")

let contador = 0
document.getElementById("btnCont").addEventListener("click", () => {

    spanCont.innerText = contador++
})



const sectionFondo = document.getElementById("sectionFondo")

const colores = ["red", "green", "blue", "yellow", "orange", "purple", "pink"]
document.getElementById("btnCol").addEventListener("click", () => {

    sectionFondo.style.backgroundColor = colores[Math.floor(Math.random() * 6)]
})



const hora = new Date().getHours()

if (hora >= 12 && hora < 21) {
    document.getElementById("spanSaludo").innerText = "Buenas Tardes"
}else if (hora < 12) {
    document.getElementById("spanSaludo").innerText = "Buenos Dias"
}else{
    document.getElementById("spanSaludo").innerText = "Buenas Noches"
}


const btnSubir = document.getElementById("btnSubir")

window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        btnSubir.style.display = "block"
    } else {
        btnSubir.style.display = "none"
    }
})



window.onscroll = () => {
    updateProgressBar()
}

const updateProgressBar = () => {
    const scrollTop = document.documentElement.scrollTop
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPorcentaje = (scrollTop / windowHeight) * 100

    const barraProgreso = document.getElementById("barraProgreso")
    barraProgreso.style.width = scrollPorcentaje + "%"
}




const button = document.getElementById("btnTema")
const body = document.body
const header = document.querySelector("header")
const nav = document.querySelector("nav")
const footer = document.querySelector("footer")

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark")
    body.classList.remove("light")
    header.classList.add("dark")
    header.classList.remove("light")
    nav.classList.add("dark")
    nav.classList.remove("light")
    footer.classList.add("dark")
    footer.classList.remove("light")
    button.textContent = "Cambiar a Tema Claro"
} else {
    body.classList.add("light")
    body.classList.remove("dark")
    header.classList.add("light")
    header.classList.remove("dark")
    nav.classList.add("light")
    nav.classList.remove("dark")
    footer.classList.add("light")
    footer.classList.remove("dark")
    button.textContent = "Cambiar a Tema Oscuro"
}

button.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.remove("light")
        body.classList.add("dark")
        header.classList.remove("light")
        header.classList.add("dark")
        nav.classList.remove("light")
        nav.classList.add("dark")
        footer.classList.remove("light")
        footer.classList.add("dark")
        button.textContent = "Cambiar a Tema Claro"
        localStorage.setItem("theme", "dark") 
    } else {
        body.classList.remove("dark")
        body.classList.add("light")
        header.classList.remove("dark")
        header.classList.add("light")
        nav.classList.remove("dark")
        nav.classList.add("light")
        footer.classList.remove("dark")
        footer.classList.add("light")
        button.textContent = "Cambiar a Tema Oscuro"
        localStorage.setItem("theme", "light") 
    }
})



let cambiarTamaño = true 

document.getElementById("btnTexto").addEventListener("click", () => { 
  const elementos = document.querySelectorAll("h1, a, button, h2, p")

  for (let i = 0; i < elementos.length; i++) {
    const elemento = elementos[i]
    const tamaño = window.getComputedStyle(elemento, null).getPropertyValue("font-size")
    const nuevotamaño = parseInt(tamaño)

    if (cambiarTamaño) {
      elemento.style.fontSize = (nuevotamaño + 4) + "px" 
    } else {
      elemento.style.fontSize = (nuevotamaño - 4) + "px" 
    }
  }

  cambiarTamaño = !cambiarTamaño 
})



document.getElementById("btnLeer").addEventListener('click', () => {
    if (!speechSynthesis.speaking) { 
      const message = new SpeechSynthesisUtterance(document.body.innerText)
      speechSynthesis.speak(message)
    }
  })