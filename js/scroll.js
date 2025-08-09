document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollDownBtn");
  const aboutSection = document.getElementById("about");

  if (scrollBtn && aboutSection) {
    scrollBtn.addEventListener("click", () => {
      if (window.lenis) {
        // Use Lenis smooth scroll
        window.lenis.scrollTo(aboutSection);
      } else {
        // Fallback without Lenis
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
