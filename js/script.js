document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('openSidebar');
  const themeBtn = document.getElementById('themeBtn');

  // Sidebar toggle for mobile
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      sidebar.classList.add('active');
    });
  }

  document.addEventListener('click', (e) => {
    if (sidebar && openBtn && !sidebar.contains(e.target) && !openBtn.contains(e.target) && window.innerWidth < 992) {
      sidebar.classList.remove('active');
    }
  });

  // Theme toggle
  function setTheme(dark) {
    if (dark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      themeBtn.innerHTML = '<i class="fa fa-sun"></i> Light Mode';
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      themeBtn.innerHTML = '<i class="fa fa-moon"></i> Dark Mode';
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const dark = !document.body.classList.contains('dark-mode');
      setTheme(dark);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');
  }

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
});
