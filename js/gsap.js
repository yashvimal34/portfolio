// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   // Animate each section on scroll
//   gsap.utils.toArray("section").forEach((sec) => {
//     gsap.from(sec, {
//       scrollTrigger: {
//         trigger: sec,
//         start: "top 80%",  // start when top of section hits 80% of viewport
//         toggleActions: "play none none none"
//       },
//       y: 60,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out"
//     });
//   });
// });
