document.addEventListener('DOMContentLoaded', function() {
    // Enhanced section visibility with intersection observer
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.dock-item');
    
    // Intersection Observer for sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Activate the section
                entry.target.classList.add('active');
                
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
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    });

    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Enhanced smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Show section transition
                const sectionTransition = document.querySelector('.section-transition');
                if (sectionTransition) {
                    sectionTransition.classList.add('active');
                }
                
                setTimeout(() => {
                    // Hide section transition
                    if (sectionTransition) {
                        sectionTransition.classList.remove('active');
                    }
                    
                    // Smooth scroll to target section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            }
        });
    });
    
    // Enhanced background particles system
    function createEnhancedParticles() {
        const particleCount = 30;
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section, sectionIndex) => {
            const particlesContainer = document.createElement('div');
            particlesContainer.className = 'background-particles';
            particlesContainer.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 0;
                overflow: hidden;
            `;
            
            section.appendChild(particlesContainer);
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                const size = 2 + Math.random() * 4;
                const hue = (sectionIndex * 60 + Math.random() * 60) % 360;
                
                particle.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: hsl(${hue}, 70%, 60%);
                    border-radius: 50%;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    opacity: ${0.1 + Math.random() * 0.3};
                    animation: enhancedFloat ${15 + Math.random() * 20}s ${Math.random() * 10}s infinite ease-in-out;
                `;
                
                particlesContainer.appendChild(particle);
            }
        });
        
        // Add enhanced keyframes animation
        if (!document.getElementById('enhanced-particle-keyframes')) {
            const style = document.createElement('style');
            style.id = 'enhanced-particle-keyframes';
            style.textContent = `
                @keyframes enhancedFloat {
                    0%, 100% { 
                        transform: translate(0, 0) rotate(0deg) scale(1);
                        opacity: 0.1;
                    }
                    25% { 
                        transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(90deg) scale(1.2);
                        opacity: 0.4;
                    }
                    50% { 
                        transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(180deg) scale(0.8);
                        opacity: 0.6;
                    }
                    75% { 
                        transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(270deg) scale(1.1);
                        opacity: 0.3;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Initialize enhanced particles
    createEnhancedParticles();
    
    // Enhanced scroll-based animations
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .animate-scale-in');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        if (element.classList.contains('animate-fade-in-up')) {
            element.style.transform = 'translateY(30px)';
        } else if (element.classList.contains('animate-fade-in-left')) {
            element.style.transform = 'translateX(-30px)';
        } else if (element.classList.contains('animate-fade-in-right')) {
            element.style.transform = 'translateX(30px)';
        } else if (element.classList.contains('animate-scale-in')) {
            element.style.transform = 'scale(0.9)';
        }
        
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        // Apply delay if specified
        if (element.classList.contains('animate-delay-100')) element.style.transitionDelay = '0.1s';
        if (element.classList.contains('animate-delay-200')) element.style.transitionDelay = '0.2s';
        if (element.classList.contains('animate-delay-300')) element.style.transitionDelay = '0.3s';
        if (element.classList.contains('animate-delay-400')) element.style.transitionDelay = '0.4s';
        if (element.classList.contains('animate-delay-500')) element.style.transitionDelay = '0.5s';
        
        animationObserver.observe(element);
    });
    
    // Enhanced window resize handler
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recalculate positions and animations
            sections.forEach(section => {
                if (section.classList.contains('active')) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        }, 250);
    });
    
    // Enhanced escape key handling for modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close all modals with animation
            const modals = document.querySelectorAll('.project-modal.active, .modal-overlay.active');
            modals.forEach(modal => {
                modal.style.opacity = '0';
                modal.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    modal.classList.remove('active');
                    modal.style.opacity = '';
                    modal.style.transform = '';
                }, 300);
            });
        }
    });
    
    // Performance optimization: Throttle scroll events
    let ticking = false;
    function updateOnScroll() {
        // Update any scroll-based animations here
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
    
    // Add loading states for dynamic content
    function showLoadingState(element) {
        element.classList.add('loading-pulse');
        element.style.opacity = '0.6';
    }
    
    function hideLoadingState(element) {
        element.classList.remove('loading-pulse');
        element.style.opacity = '1';
    }
    
    // Make loading functions available globally
    window.showLoadingState = showLoadingState;
    window.hideLoadingState = hideLoadingState;
    
    // Enhanced error handling
    window.addEventListener('error', function(e) {
        console.error('An error occurred:', e.error);
        // You could show a user-friendly error message here
    });
    
    // Add focus management for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
});