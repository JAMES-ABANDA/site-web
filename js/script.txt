// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
});

// Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const countElement = document.querySelector('.cart-count');
        let count = parseInt(countElement.textContent);
        countElement.textContent = count + 1;
        
        // Animation feedback
        const originalText = this.textContent;
        this.textContent = 'Ajouté !';
        this.style.backgroundColor = '#8b5cf6';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
        }, 1500);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// CTA button functionality
document.querySelector('.hero .cta-button').addEventListener('click', function() {
    document.querySelector('.categories').scrollIntoView({
        behavior: 'smooth'
    });
});
