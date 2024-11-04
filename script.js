// script.js

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example for adding functionality for "Add to Cart" (to be expanded with back-end integration)
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart! This functionality will be expanded in the full website.');
    });
});
