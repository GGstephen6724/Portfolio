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

// Something Spicyyyy
document.addEventListener('DOMContentLoaded', initializeTheme);
function startResumeSequence() {
  const overlay = document.getElementById('hacker-overlay');
  const terminal = document.getElementById('terminal');
  terminal.innerHTML = ''; // Clear previous content if reopened
  overlay.classList.add('show');

  const steps = [
    'ACCESSING RESUME...',
    'Decrypting data packets...',
    'Bypassing firewall...',
    'Routing through proxy node...',
    'Decrypt sequence: █░░░░░░░░░ 10%',
    'Decrypt sequence: ███░░░░░░░ 30%',
    'Decrypt sequence: ██████░░░░ 60%',
    'Decrypt sequence: ██████████ 100%',
    'RESUME READY.'
  ];

  let i = 0;

  function typeLine() {
    if (i < steps.length) {
      const line = document.createElement('div');
      line.textContent = steps[i];
      terminal.appendChild(line);
      i++;
      setTimeout(typeLine, 600);
    } else {
      const openBtn = document.createElement('button');
      openBtn.textContent = 'Open Resume PDF';
      openBtn.style.marginTop = '20px';
      openBtn.style.padding = '10px 20px';
      openBtn.style.fontSize = '1rem';
      openBtn.style.fontFamily = 'Courier New, monospace';
      openBtn.style.color = 'black';
      openBtn.style.background = 'lime';
      openBtn.style.border = 'none';
      openBtn.style.cursor = 'url("/cursors/green-glow.cur"), pointer';
      openBtn.onclick = () => {
        window.open('images/resume.pdf', '_blank'); 
      };
      terminal.appendChild(openBtn);
    }
  }

  typeLine();
}

function closeResumeOverlay() {
  const overlay = document.getElementById('hacker-overlay');
  overlay.classList.remove('show');
}