// Animate progress bars when About section becomes visible
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll('.progress-bar');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const finalValue = bar.getAttribute('data-progress');
        bar.style.width = finalValue + '%';
        bar.style.transition = 'width 1.5s ease';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => {
    bar.style.width = '0%'; // start from 0
    observer.observe(bar);
  });
});
