document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".course-card");

  function animateCards() {
    cards.forEach((card, index) => {
      const title = card.querySelector("h5");
      const desc = card.querySelector("p");

      // Remove animation classes
      title.classList.remove("animate-title");
      desc.classList.remove("animate-desc");

      // Trigger reflow (to restart animation)
      void title.offsetWidth;

      // Add animation classes with staggered delay
      setTimeout(() => {
        title.classList.add("animate-title");
        desc.classList.add("animate-desc");
      }, index * 200);
    });
  }

  // Run initially
  animateCards();
  // Repeat every 3 seconds
  setInterval(animateCards, 3000);
});
