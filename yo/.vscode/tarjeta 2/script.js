const boton = document.getElementById("boton");
const musica = document.getElementById("musica");

boton.addEventListener("mouseover", function() {
    musica.play();
});

boton.addEventListener("mouseout", function() {
    musica.pause();
    musica.currentTime = 0;
});