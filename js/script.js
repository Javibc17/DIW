// Obtiene el elemento con el id "spanCont"
const spanCont = document.getElementById("spanCont");

// Inicializa un contador en 0
let contador = 0;

// Agrega un evento al botón "btnCont" que incrementa el contador y actualiza el texto en "spanCont"
document.getElementById("btnCont").addEventListener("click", () => {
    spanCont.innerText = contador++;
});

// Obtiene el elemento con el id "sectionFondo"
const sectionFondo = document.getElementById("sectionFondo");

// Define un array de colores
const colores = ["red", "green", "blue", "yellow", "orange", "purple", "pink"];

// Agrega un evento al botón "btnCol" que cambia el color de fondo de "sectionFondo" a un color aleatorio
document.getElementById("btnCol").addEventListener("click", () => {
    sectionFondo.style.backgroundColor = colores[Math.floor(Math.random() * 6)];
});

// Obtiene la hora actual
const hora = new Date().getHours();

// Cambia el saludo en "spanSaludo" según la hora del día
if (hora >= 12 && hora < 21) {
    document.getElementById("spanSaludo").innerText = "Buenas Tardes";
} else if (hora < 12) {
    document.getElementById("spanSaludo").innerText = "Buenos Dias";
} else {
    document.getElementById("spanSaludo").innerText = "Buenas Noches";
}

// Obtiene el botón "btnSubir"
const btnSubir = document.getElementById("btnSubir");

// Agrega un evento al scroll de la ventana para mostrar u ocultar el botón "btnSubir"
window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        btnSubir.style.display = "block"; // Muestra el botón si se ha desplazado más de 150px
    } else {
        btnSubir.style.display = "none"; // Oculta el botón si no
    }
});

// Asigna la función updateProgressBar al evento scroll de la ventana
window.onscroll = () => {
    updateProgressBar();
};

// Función para actualizar la barra de progreso según el desplazamiento
const updateProgressBar = () => {
    const scrollTop = document.documentElement.scrollTop; // Obtiene la posición de desplazamiento vertical
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Altura total del documento
    const scrollPorcentaje = (scrollTop / windowHeight) * 100; // Calcula el porcentaje de desplazamiento

    const barraProgreso = document.getElementById("barraProgreso"); // Obtiene la barra de progreso
    barraProgreso.style.width = scrollPorcentaje + "%"; // Actualiza el ancho de la barra de progreso
};

// Obtiene el botón "btnTema" y otros elementos del DOM
const button = document.getElementById("btnTema");
const body = document.body;
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

// Verifica el tema guardado en localStorage y aplica el tema correspondiente
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");
    header.classList.add("dark");
    header.classList.remove("light");
    nav.classList.add("dark");
    nav.classList.remove("light");
    footer.classList.add("dark");
    footer.classList.remove("light");
    button.textContent = "Cambiar a Tema Claro"; // Cambia el texto del botón
} else {
    body.classList.add("light");
    body.classList.remove("dark");
    header.classList.add("light");
    header.classList.remove("dark");
    nav.classList.add("light");
    nav.classList.remove("dark");
    footer.classList.add("light");
    footer.classList.remove("dark");
    button.textContent = "Cambiar a Tema Oscuro"; // Cambia el texto del botón
}

// Agrega un evento al botón "btnTema" para cambiar entre temas claro y oscuro
button.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        // Cambia a tema oscuro
        body.classList.remove("light");
        body.classList.add("dark");
        header.classList.remove("light");
        header.classList.add("dark");
        nav.classList.remove("light");
        nav.classList.add("dark");
        footer.classList.remove("light");
        footer.classList.add("dark");
        button.textContent = "Cambiar a Tema Claro"; // Cambia el texto del botón
        localStorage.setItem("theme", "dark"); // Guarda el tema oscuro en localStorage
    } else {
        // Cambia a tema claro
        body.classList.remove("dark");
        body.classList.add("light");
        header.classList.remove("dark");
        header.classList.add("light");
        nav.classList.remove("dark");
        nav.classList.add("light");
        footer.classList.remove("dark");
        footer.classList.add("light");
        button.textContent = "Cambiar a Tema Oscuro"; // Cambia el texto del botón
        localStorage.setItem("theme", "light"); // Guarda el tema claro en localStorage
    }
});

// Inicializa una variable para controlar el tamaño del texto
let cambiarTamaño = true;

// Agrega un evento al botón "btnTexto" para aumentar o disminuir el tamaño del texto
document.getElementById("btnTexto").addEventListener("click", () => {
    const elementos = document.querySelectorAll("h1, a, button, h2, p"); // Selecciona los elementos a modificar

    for (let i = 0; i < elementos.length; i++) {
        const elemento = elementos[i];
        const tamaño = window.getComputedStyle(elemento, null).getPropertyValue("font-size"); // Obtiene el tamaño actual del texto
        const nuevotamaño = parseInt(tamaño); // Convierte el tamaño a un número entero

        if (cambiarTamaño) {
            elemento.style.fontSize = (nuevotamaño + 4) + "px"; // Aumenta el tamaño del texto
        } else {
            elemento.style.fontSize = (nuevotamaño - 4) + "px"; // Disminuye el tamaño del texto
        }
    }

    cambiarTamaño = !cambiarTamaño; // Alterna el estado de cambiarTamaño
});

// Agrega un evento al botón "btnLeer" para leer el contenido de la página
document.getElementById("btnLeer").addEventListener('click', () => {
    if (!speechSynthesis.speaking) { // Verifica si no se está hablando
        const message = new SpeechSynthesisUtterance(document.body.innerText); // Crea un nuevo mensaje con el texto del cuerpo
        speechSynthesis.speak(message); // Inicia la lectura del mensaje
    }
});