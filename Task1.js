document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('active');
        });
        link.addEventListener('mouseout', () => {
            link.classList.remove('active');
        });
    });
});
