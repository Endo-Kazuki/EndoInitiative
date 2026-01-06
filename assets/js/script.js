const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 1. Check Local Storage for user preference
const currentTheme = localStorage.getItem('theme');

// 2. If a theme is saved, apply it
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    updateButtonText(currentTheme);
} else {
    // Optional: Check system preference if no manual save exists
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
        body.setAttribute('data-theme', 'dark');
        updateButtonText('dark');
    }
}

// 3. Handle the Button Click
toggleButton.addEventListener('click', () => {
    // Check if the body currently has the dark theme class
    const currentAttribute = body.getAttribute('data-theme');
    
    if (currentAttribute === 'dark') {
        // Switch to Light
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateButtonText('light');
    } else {
        // Switch to Dark
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateButtonText('dark');
    }
});

// Helper function to change button text/icon
function updateButtonText(theme) {
    if (theme === 'dark') {
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
    }
}
