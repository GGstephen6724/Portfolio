function toggleDarkMode() {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');
  const root = document.documentElement;

  if (isDark) {
  root.style.setProperty('--hero-text-color', '#f5f5f5'); // light text
  root.style.setProperty('--bg-color', '#121212');
  root.style.setProperty('--secondary-bg', '#1e1e1e');
  root.style.setProperty('--text-color', '#f5f5f5');
  root.style.setProperty('--accent-color', '#00c2ff');

  root.style.setProperty('--hero-bg-color', '#1a1a1a'); // dark hero section
  root.style.setProperty('--hero-overlay', 'rgba(0, 0, 0, 0.5)');
  } else {
  root.style.setProperty('--bg-color', '#fdfdfd');
  root.style.setProperty('--secondary-bg', '#ffffff');
  root.style.setProperty('--text-color', '#222222');
  root.style.setProperty('--accent-color', '#ff4c60');

  root.style.setProperty('--hero-text-color', '#222222'); // dark text
  root.style.setProperty('--hero-bg-color', '#fff4f4'); // light hero section
  root.style.setProperty('--hero-overlay', 'rgba(255, 255, 255, 0.6)');
  }

// JavaScript for Dark Mode Toggle
        const toggleButton = document.querySelector('.toggle-button');
        const body = document.body;

        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

        // Set initial theme based on user's system preference or a saved preference
        function initializeTheme() {
            if (localStorage.getItem('theme') === 'dark' || (localStorage.getItem('theme') === null && prefersDarkScheme.matches)) {
                body.classList.add('dark');
            } else {
                body.classList.remove('dark');
            }
        }

        // Toggle theme on button click
        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark');
            if (body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

// JavaScript for Custom Cursor
        const customCursor = document.querySelector('.custom-cursor');

        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
        });

        // Initialize the theme when the page loads
        document.addEventListener('DOMContentLoaded', initializeTheme);

// Run the setup functions when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setupDarkModeToggle();
    setupCustomCursor();
});
}
