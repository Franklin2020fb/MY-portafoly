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
