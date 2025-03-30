
//Menu header posicionado
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("header-fijo");
        header.style.left = "50%";
        header.style.transform = "translateX(-50%)"; 
    } 
    else {
        header.classList.remove("header-fijo");
        header.style.left = "50%";
        header.style.transform = "translateX(-50%)";
    }
});

//logos giratorios 
const circle = document.getElementById("circle");
const logo = document.getElementById("logo");

const platforms = [
    { src: "imagenes/xbox-logo-negro.png", color: "#107C10" },
    { src: "imagenes/playstation-png-logo.png", color: "#003791" },
    { src: "imagenes/nintendo.png", color: "#E60012" },
    { src: "imagenes/steam.png", color: "#171A21" }
];

let index = 0;
let interval = setInterval(changePlatform, 5000);

function changePlatform() {
    logo.style.transition = "opacity 0.8s ease-in-out"; 
    logo.style.opacity = "0"; 

    setTimeout(() => {
        index = (index + 1) % platforms.length;
        logo.src = platforms[index].src;
        circle.style.background = platforms[index].color;
        logo.style.opacity = "1"; 
    }, 800);
}


circle.addEventListener("mouseover", () => {
    logo.style.animationPlayState = "paused";
    clearInterval(interval);
});


circle.addEventListener("mouseleave", () => {
    logo.style.animationPlayState = "running";
    interval = setInterval(changePlatform, 5000);
});


//Seccion de doom 
document.addEventListener("DOMContentLoaded", async () => {
    const dosbox = document.getElementById("dosbox");
    if (!dosbox) {
        console.error("No se encontró el elemento #dosbox");
        return;
    }

    try {
        const dos = await Dos(dosbox).run("doom/doom.jsdos", {
            useTouch: true
        });
    } catch (error) {
        console.error("Error al ejecutar js-dos:", error);
    }
});

//botones seccion doom

document.getElementById('btn-installation').addEventListener('click', function() {
    const card = document.getElementById('card-installation');
    card.style.display = card.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('btn-controls').addEventListener('click', function() {
    const card = document.getElementById('card-controls');
    card.style.display = card.style.display === 'block' ? 'none' : 'block';
});