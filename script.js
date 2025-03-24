// Audio de fondo 
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");

    // Intenta reproducir el audio automáticamente
    const playAudio = () => {
        audio.play().catch(error => {
            console.log("Autoplay bloqueado, se necesita interacción del usuario.");
        });
    };

    // Intenta reproducirlo al cargar la página
    playAudio();

    // Agrega un evento al hacer clic en cualquier parte de la página
    document.addEventListener("click", playAudio, { once: true });
});

document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carousel");
    const imagenes = document.querySelectorAll(".carousel img");
    const totalImagenes = imagenes.length;

    let indice = 0;

    function moverCarrusel() {
        indice++;
        
        if (indice >= totalImagenes) {
            carrusel.style.transition = "none";  // Elimina la animación para reiniciar sin parpadeo
            carrusel.style.transform = "translateX(0)";
            indice = 0; // Reinicia la posición
        } else {
            carrusel.style.transition = "transform 1s ease-in-out";
            carrusel.style.transform = `translateX(-${indice * 100}%)`;
        }
    }

    setInterval(moverCarrusel, 4000);
});





