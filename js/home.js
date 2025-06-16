// Enhanced Home Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect for subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };

    // Start typing effect after page load
    setTimeout(typeWriter, 1500);

    // Create floating particles
    function createParticles() {
        const particlesContainer = document.getElementById('heroParticles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            
            // Random size
            const size = 2 + Math.random() * 4;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random opacity
            particle.style.opacity = 0.3 + Math.random() * 0.5;
            
            particlesContainer.appendChild(particle);
        }
    }

    // Initialize particles
    createParticles();

    // Enhanced scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Parallax effect for hero content
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroBlobs = document.querySelectorAll('.hero-blob');
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        heroBlobs.forEach((blob, index) => {
            const speed = 0.2 + (index * 0.1);
            blob.style.transform += ` translateY(${scrolled * speed}px)`;
        });
    });

    // Enhanced CTA button interaction
    const ctaButton = document.querySelector('.hero-cta');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.transform = 'translateY(-4px) scale(1.05)';
        });
        
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.transform = 'translateY(0) scale(1)';
        });
    }

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe animated elements
    document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .animate-scale-in').forEach(el => {
        observer.observe(el);
    });

    // Dynamic background color based on scroll
    window.addEventListener('scroll', () => {
        const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
        const hue = Math.floor(scrollPercent * 60); // 0 to 60 degrees
        document.body.style.background = `
            linear-gradient(135deg, 
                hsl(${220 + hue}, 20%, 4%) 0%, 
                hsl(${240 + hue}, 25%, 6%) 50%, 
                hsl(${260 + hue}, 20%, 4%) 100%
            )
        `;
    });
});