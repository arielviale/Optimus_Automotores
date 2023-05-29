const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const sr = ScrollReveal();
sr.reveal('.mi-clase', {
    origin: 'right',
    distance: '500px',
    duration: 1000,
    delay: 0.1,
    opacity: 0.2,
    easing: 'ease-in-out',
});
ScrollReveal().reveal('.tile', {
    interval: 4,
    reset: true
});
window.addEventListener('scroll', function () {
    const porQueElegirnos = document.getElementById('por-que-elegirnos');
    const porQueElegirnosPosicion = porQueElegirnos.getBoundingClientRect().top;
    const pantallaPosicion = window.innerHeight / 1.3;

    if (porQueElegirnosPosicion < pantallaPosicion) {
        porQueElegirnos.classList.add('animate__backInDown');
    }
});
