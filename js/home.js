// Parallax effect for floating shapes
const shapes = document.querySelectorAll('.floating-shapes .shape');
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  shapes.forEach((shape, index) => {
    const factor = (index + 1) / 10;
    shape.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});
