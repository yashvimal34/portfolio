document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".img-txt");

  function animateElement(el) {
    el.style.transition = "transform 3s ease, opacity 3s ease";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";

    setTimeout(() => {
      // Reset position to restart animation
      el.style.transition = "none";
      el.style.opacity = "0";
      el.style.transform = "translateY(50px)";

      // Trigger re-animation
      setTimeout(() => {
        animateElement(el);
      }, 50);
    }, 3000);
  }

  elements.forEach(el => animateElement(el));
});
