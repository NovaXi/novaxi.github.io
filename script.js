document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.hash || '#';

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = 'var(--accent)';
            link.style.fontWeight = 'bold';
        }
    });
});
