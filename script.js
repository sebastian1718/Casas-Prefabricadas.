let index = 0;
const casas = document.querySelectorAll(".casa");
const info = document.getElementById("info-casa");

function mostrarCasa(n) {
    casas.forEach((casa, i) => {
        casa.classList.remove("activa");
        if (i === n) {
            casa.classList.add("activa");
            info.textContent = casa.getAttribute("data-info");
        }
    });
}

document.querySelector(".flecha.izq").addEventListener("click", () => {
    index = (index - 1 + casas.length) % casas.length;
    mostrarCasa(index);
});

document.querySelector(".flecha.der").addEventListener("click", () => {
    index = (index + 1) % casas.length;
    mostrarCasa(index);
});

casas.forEach((casa, i) => {
    casa.addEventListener("click", () => {
        info.textContent = casa.getAttribute("data-info");
    });
});

// Mostrar la primera casa al cargar
mostrarCasa(index);
