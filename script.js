document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("visible");
});
// Animación al hacer scroll
document.addEventListener("scroll", () => {
  const secciones = document.querySelectorAll("section");
  secciones.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.8) {
      sec.classList.add("visible");
    }
  });
});
