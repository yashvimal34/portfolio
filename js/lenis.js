document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Create a Lenis instance
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
  });

  // Make lenis accessible globally for other scripts (important)
  window.lenis = lenis;

  // RAF loop
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Sync GSAP ScrollTrigger with Lenis
  lenis.on("scroll", ScrollTrigger.update);

  // Hero Animation
  const heroTl = gsap.timeline();
  heroTl.from("#home .hero-content > *", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Section Animations
  gsap.utils.toArray("section").forEach((sec) => {
    if (sec.id !== "home") {
      gsap.from(sec, {
        scrollTrigger: {
          trigger: sec,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
  });
});
