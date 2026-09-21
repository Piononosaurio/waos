const inicio = document.getElementById("inicio");
const mensaje = document.getElementById("mensaje");

const abrirBtn = document.getElementById("abrirBtn");
const volverBtn = document.getElementById("volverBtn");

const petalsContainer = document.getElementById("petals");
const musica = document.getElementById("musica");

abrirBtn.addEventListener("click", () => {
    if (musica) {
        musica.volume = 0.35;
        musica.play().catch(error => {
            console.log("El audio no pudo reproducirse automáticamente:", error);
        });
    }

    inicio.classList.remove("activa");

    setTimeout(() => {
        mensaje.classList.add("activa");
    }, 350);
});

volverBtn.addEventListener("click", () => {
    mensaje.classList.remove("activa");

    setTimeout(() => {
        inicio.classList.add("activa");
    }, 350);
});

function crearPetalo() {
    if (!petalsContainer) return;

    if (petalsContainer.children.length > 30) return;

    const petalo = document.createElement("div");
    petalo.classList.add("petal");

    const flores = ["✨", "💖", "💎", "🌸", "🌟"];
    petalo.textContent = flores[Math.floor(Math.random() * flores.length)];

    const tamaño = Math.random() * 12 + 12;
    const duracion = Math.random() * 6 + 6;
    const retraso = Math.random() * 2;

    petalo.style.left = Math.random() * 100 + "vw";
    petalo.style.fontSize = tamaño + "px";
    petalo.style.animationDuration = duracion + "s";
    petalo.style.animationDelay = retraso + "s";

    petalsContainer.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, (duracion + retraso) * 1000);
}

setInterval(crearPetalo, 900);

for (let i = 0; i < 8; i++) {
    setTimeout(crearPetalo, i * 400);
}
