// active-link.js

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Highlight active link on click
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Remove active from all
    navLinks.forEach(l => l.classList.remove("active"));
    // Add active to clicked
    link.classList.add("active");

    // Optional: close mobile menu after click
    const nav = document.getElementById("nav");
    nav.classList.remove("show");
  });
});

// Highlight active link on scroll
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 90; // adjust offset for header height
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
