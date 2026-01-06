document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.dataset.theme = savedTheme;
    toggle.checked = savedTheme === 'dark';
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // optional: respect system preference
    root.dataset.theme = 'dark';
    toggle.checked = true;
  }

  // Listen for toggle changes
  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  });
});
