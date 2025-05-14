document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('button[aria-label="Toggle navigation menu"]');

    if (menuButton) {
        menuButton.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();

            const navigationMenu = document.getElementById('navigation-menu');

            if (navigationMenu) {
                if (navigationMenu.classList.contains('hidden')) {
                    navigationMenu.classList.remove('hidden');
                    menuButton.setAttribute('aria-expanded', 'true');
                } else {
                    navigationMenu.classList.add('hidden');
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    // Corrected navigation: REPLACE href, do not append
    const menuLinks = document.querySelectorAll('#navigation-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href) {
                window.location.assign(href); // ✅ Clean replacement
            }
        });
    });
});
