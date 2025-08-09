
window.addEventListener("load", () => {
  const squares = document.querySelectorAll("#loader .loader-square");

  // Create GSAP timeline
  const tl = gsap.timeline({
    onComplete: () => {
      // After animation, fade out loader
      gsap.to("#loader", { opacity: 0, duration: 0.8, onComplete: () => {
        document.body.classList.add("loaded");
        document.getElementById("loader").style.display = "none";
      }});
    }
  });

  // Animate squares one by one (connecting)
  squares.forEach((square, index) => {
    tl.to(square, {
      scale: 1.5,
      opacity: 1,
      duration: 0.25,
      ease: "back.out(2)",
    }, index * 0.15) // delay each square
    .to(square, {
      scale: 1,
      duration: 0.2
    }, "-=0.1");
  });

  // Total min time ~ 2 seconds
  tl.to({}, { duration: 0.5 }); // hold for a bit
});