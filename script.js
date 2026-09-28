document.getElementById("rojo").innerHTML = "Adiós";
document.getElementById("rojo").style.color = "orange";

const clickazul = document.querySelector(".azul");

clickazul.addEventListener('click', () => {
    clickazul.style.color = "brown";
});