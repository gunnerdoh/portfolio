document.addEventListener('DOMContentLoaded', () => {
  // Show nav name when sidebar name scrolls out of view
  const navName = document.querySelector('.nav-name');
  const sidebarName = document.querySelector('.sidebar .name');

  if (navName && sidebarName) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navName.classList.remove('visible');
        } else {
          navName.classList.add('visible');
        }
      },
      { threshold: 0 }
    );
    observer.observe(sidebarName);
  }
});
