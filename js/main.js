document.addEventListener('DOMContentLoaded', function() {
    // Section visibility on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.dock-item');
    
    function checkSection() {
        const scrollPosition = window.scrollY + 300; // Offset for earlier activation
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Activate the section
                section.classList.add('active');
                
                // Update dock navigation
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const linkTarget = link.getAttribute('href').substring(1);
                    
                    if (linkTarget === sectionId) {
                        link.classList.add('active');
                        
                        // Show running indicator
                        const indicator = link.querySelector('.running-indicator');
                        if (indicator) {
                            indicator.style.opacity = '1';
                            indicator.style.transform = 'translateX(-50%) scale(1)';
                        }
                    } else {
                        // Hide running indicator
                        const indicator = link.querySelector('.running-indicator');
                        if (indicator) {
                            indicator.style.opacity = '0';
                            indicator.style.transform = 'translateX(-50%) scale(0)';
                        }
                    }
                });
            }
        });
    }
    
    // Initialize section check
    checkSection();
    
    // Listen for scroll events
    window.addEventListener('scroll', checkSection);
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Show section transition
                const sectionTransition = document.querySelector('.section-transition');
                sectionTransition.classList.add('active');
                
                setTimeout(() => {
                    // Hide section transition
                    sectionTransition.classList.remove('active');
                    
                    // Scroll to target section
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }, 500);
            }
        });
    });
    
    // Create background particles
    function createBackgroundParticles() {
        const particleCount = 20;
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const particlesContainer = document.createElement('div');
            particlesContainer.className = 'background-particles';
            particlesContainer.style.position = 'absolute';
            particlesContainer.style.top = '0';
            particlesContainer.style.left = '0';
            particlesContainer.style.width = '100%';
            particlesContainer.style.height = '100%';
            particlesContainer.style.pointerEvents = 'none';
            particlesContainer.style.zIndex = '0';
            
            section.appendChild(particlesContainer);
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = `${2 + Math.random() * 3}px`;
                particle.style.height = particle.style.width;
                particle.style.backgroundColor = 'rgba(66, 134, 244, 0.1)';
                particle.style.borderRadius = '50%';
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Animation
                const duration = 15 + Math.random() * 20;
                const delay = Math.random() * 10;
                particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;
                
                particlesContainer.appendChild(particle);
            }
        });
        
        // Add keyframes animation
        const style = document.createElement('style');
        style.id = 'particle-keyframes';
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg); }
                50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg); }
                75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize background particles
    createBackgroundParticles();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Recalculate section positions
        checkSection();
    });
    
    // Escape key handling for modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close all modals
            document.querySelectorAll('.project-modal.active, .modal-overlay.active').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
});