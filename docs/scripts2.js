const toggleButton = document.querySelector('.toggle-button');
const body = document.body;
const root = document.documentElement;

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function applyThemeVariables(isDark) {
    if (isDark) {
        root.style.setProperty('--bg-color', '#121212');
        root.style.setProperty('--secondary-bg', '#1e1e1e');
        root.style.setProperty('--text-color', '#f5f5f5');
        root.style.setProperty('--accent-color', '#00c2ff');
        root.style.setProperty('--hero-text-color', '#f5f5f5');
        root.style.setProperty('--hero-bg-color', '#1a1a1a');
        root.style.setProperty('--hero-overlay', 'rgba(0, 0, 0, 0.5)');
    } else {
        root.style.setProperty('--bg-color', '#fdfdfd');
        root.style.setProperty('--secondary-bg', '#ffffff');
        root.style.setProperty('--text-color', '#222222');
        root.style.setProperty('--accent-color', '#ff4c60');
        root.style.setProperty('--hero-text-color', '#222222');
        root.style.setProperty('--hero-bg-color', '#fff4f4');
        root.style.setProperty('--hero-overlay', 'rgba(255, 255, 255, 0.6)');
    }
}

function initializeTheme() {
    const systemPrefersDark = prefersDarkScheme.matches;
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'dark' || (storedTheme === null && systemPrefersDark);

    body.classList.toggle('dark', isDark);
    applyThemeVariables(isDark);
}

toggleButton.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark');
    body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyThemeVariables(isDark);
});

// Custom cursor
const customCursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});

document.addEventListener('DOMContentLoaded', initializeTheme);