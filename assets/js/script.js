<script>
  // Grab the toggle and root
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  // 1️⃣ Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.dataset.theme = savedTheme;
    toggle.checked = savedTheme === 'dark';
  } else {
    // 2️⃣ Optional: respect system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.dataset.theme = 'dark';
      toggle.checked = true;
    }
  }

  // 3️⃣ Listen for changes on toggle
  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  });
</script>
