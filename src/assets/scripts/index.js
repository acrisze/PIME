const themeToggles = document.querySelectorAll('#themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') ||
    (prefersDarkScheme.matches ? 'dark' : 'light');

// Set initial theme
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggles.forEach(item => {
    updateThemeIcon(item, currentTheme);
})

// Toggle theme

themeToggles.forEach(item => {
    item.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(item, newTheme);
    });

})


// Update theme icon
function updateThemeIcon(item, theme) {
    item.textContent = theme === 'dark' ? '☀️' : '🌙';
}


// Hamburger menu mobile
const hamburger = document.getElementById('hamburgerMenu');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    mobileMenu.st
});

// Fecha o menu ao clicar em um link
mobileMenu.querySelectorAll('.nav-item-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});