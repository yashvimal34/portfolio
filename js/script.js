document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('openSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const themeBtn = document.getElementById('themeBtn');

  // Show/hide mobile menu button based on screen size
  function toggleMobileButton() {
    if (window.innerWidth < 992) {
      if (openBtn) openBtn.style.display = 'block';
    } else {
      if (openBtn) openBtn.style.display = 'none';
      if (sidebar) sidebar.classList.remove('active');
      if (overlay) overlay.style.display = 'none';
    }
  }

  // Initial check
  toggleMobileButton();
  window.addEventListener('resize', toggleMobileButton);

  // Sidebar toggle for mobile
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      sidebar.classList.add('active');
      if (overlay) {
        overlay.style.display = 'block';
        setTimeout(() => overlay.style.opacity = '1', 10);
      }
    });
  }

  // Close sidebar when clicking overlay
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('active');
      overlay.style.opacity = '0';
      setTimeout(() => overlay.style.display = 'none', 300);
    });
  }

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 992) {
      if (sidebar && openBtn && overlay && 
          !sidebar.contains(e.target) && 
          !openBtn.contains(e.target) && 
          sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.display = 'none', 300);
      }
    }
  });

  // Close sidebar when clicking nav links on mobile
  const navLinks = document.querySelectorAll('#sidebar .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        sidebar.classList.remove('active');
        if (overlay) {
          overlay.style.opacity = '0';
          setTimeout(() => overlay.style.display = 'none', 300);
        }
      }
    });
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
