document.addEventListener('DOMContentLoaded', () => {
    console.log('NovaXi site script loaded successfully!');

    const navLinks = document.querySelectorAll('nav a');

    const highlightActiveLink = (hash) => {
        navLinks.forEach(link => {
            link.style.color = ''; 
            link.style.fontWeight = 'normal';

            let linkHref = link.getAttribute('href');

            if ((hash === '' || hash === '#') && linkHref === '#') {
                link.style.color = 'var(--accent)';
                link.style.fontWeight = 'bold';
            } else if (hash === linkHref) {
                link.style.color = 'var(--accent)';
                link.style.fontWeight = 'bold';
            }
        });
    };
    
    highlightActiveLink(window.location.hash);

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                event.preventDefault(); 
                const targetId = href.substring(1);
                
                const targetElement = targetId ? document.getElementById(targetId) : document.body;

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth' 
                    });
                    
                    history.pushState(null, '', href);

                    highlightActiveLink(href);
                }
            }
        });
    });
});
