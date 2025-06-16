class SmoothRoboticsCarousel {
    constructor() {
        this.currentIndex = 0;
        this.isTransitioning = false;
        this.track = document.getElementById('carouselTrack');
        this.indicators = document.getElementById('indicators');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.progressBar = document.getElementById('progressBar');

        this.autoPlayInterval = null;
        this.autoPlayDuration = 2500;
        this.progressAnimation = null;

        this.init();
    }

    init() {
        this.createSlides();
        this.createIndicators();
        this.bindEvents();
        this.updateSlides();
        this.startAutoPlay();
    }

    createSlides() {
        const fragment = document.createDocumentFragment();

        galleryData.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.dataset.index = index;

            slide.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" class="slide-image" loading="lazy">
                        <div class="slide-content">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    `;

            fragment.appendChild(slide);
        });

        this.track.appendChild(fragment);
    }

    createIndicators() {
        const fragment = document.createDocumentFragment();

        galleryData.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (index === 0) indicator.classList.add('active');
            indicator.dataset.index = index;
            fragment.appendChild(indicator);
        });

        this.indicators.appendChild(fragment);
    }

    bindEvents() {
        // Window button interactions
        document.querySelector('.close-btn').addEventListener('click', () => {
            const window = document.querySelector('.mac-window');
            window.style.transition = 'all 0.3s ease';
            window.style.transform = 'scale(0.8)';
            window.style.opacity = '0';
        });

        document.querySelector('.minimize-btn').addEventListener('click', () => {
            const window = document.querySelector('.mac-window');
            window.style.transition = 'all 0.3s ease';
            window.style.transform = 'scale(0.1) translateY(100vh)';
        });

        document.querySelector('.maximize-btn').addEventListener('click', () => {
            const window = document.querySelector('.mac-window');
            window.style.transition = 'max-width 0.3s ease';
            window.style.maxWidth = window.style.maxWidth === '100vw' ? '800px' : '100vw';
        });

        this.prevBtn.addEventListener('click', () => {
            if (!this.isTransitioning) {
                this.resetAutoPlay();
                this.prev();
            }
        });

        this.nextBtn.addEventListener('click', () => {
            if (!this.isTransitioning) {
                this.resetAutoPlay();
                this.next();
            }
        });

        // Indicator clicks
        this.indicators.addEventListener('click', (e) => {
            if (e.target.classList.contains('indicator') && !this.isTransitioning) {
                this.resetAutoPlay();
                this.goTo(parseInt(e.target.dataset.index));
            }
        });

        // Slide clicks
        this.track.addEventListener('click', (e) => {
            const slide = e.target.closest('.carousel-slide');
            if (slide && !this.isTransitioning) {
                const index = parseInt(slide.dataset.index);
                if (index !== this.currentIndex) {
                    this.resetAutoPlay();
                    this.goTo(index);
                }
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.isTransitioning) {
                if (e.key === 'ArrowLeft') {
                    this.resetAutoPlay();
                    this.prev();
                }
                if (e.key === 'ArrowRight') {
                    this.resetAutoPlay();
                    this.next();
                }
            }
        });

        // Optimized touch support
        let startX = 0;
        let startTime = 0;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startTime = Date.now();
        }, { passive: true });

        this.track.addEventListener('touchend', (e) => {
            if (!startX || this.isTransitioning) return;

            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            const diffTime = Date.now() - startTime;

            if (Math.abs(diffX) > 50 && diffTime < 300) {
                this.resetAutoPlay();
                if (diffX > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            startX = 0;
        }, { passive: true });
    }

    updateSlides() {
        if (this.isTransitioning) return;

        this.isTransitioning = true;
        const slides = this.track.querySelectorAll('.carousel-slide');
        const indicators = this.indicators.querySelectorAll('.indicator');

        // Batch DOM updates
        requestAnimationFrame(() => {
            slides.forEach((slide, index) => {
                // Remove all position classes
                slide.className = 'carousel-slide';

                const diff = index - this.currentIndex;
                const totalSlides = slides.length;

                if (diff === 0) {
                    slide.classList.add('position-active');
                } else if (diff === -1 || (this.currentIndex === 0 && index === totalSlides - 1)) {
                    slide.classList.add('position-prev-1');
                } else if (diff === -2 || (this.currentIndex <= 1 && index >= totalSlides - 2 + this.currentIndex)) {
                    slide.classList.add('position-prev-2');
                } else if (diff === 1 || (this.currentIndex === totalSlides - 1 && index === 0)) {
                    slide.classList.add('position-next-1');
                } else if (diff === 2 || (this.currentIndex >= totalSlides - 2 && index <= 1 - (totalSlides - this.currentIndex))) {
                    slide.classList.add('position-next-2');
                } else {
                    slide.classList.add('position-hidden');
                }
            });

            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === this.currentIndex);
            });

            // Reset transition flag after animation completes
            setTimeout(() => {
                this.isTransitioning = false;
            }, 600); // Match CSS transition duration
        });
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % galleryData.length;
        this.updateSlides();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + galleryData.length) % galleryData.length;
        this.updateSlides();
    }

    goTo(index) {
        if (index !== this.currentIndex) {
            this.currentIndex = index;
            this.updateSlides();
        }
    }

    startAutoPlay() {
        this.startProgressAnimation();

        this.autoPlayInterval = setInterval(() => {
            if (!this.isTransitioning) {
                this.next();
                this.startProgressAnimation();
            }
        }, this.autoPlayDuration);
    }

    startProgressAnimation() {
        if (this.progressAnimation) {
            this.progressAnimation.cancel();
        }

        this.progressBar.style.transform = 'scaleX(0)';

        this.progressAnimation = this.progressBar.animate([
            { transform: 'scaleX(0)' },
            { transform: 'scaleX(1)' }
        ], {
            duration: this.autoPlayDuration,
            easing: 'linear',
            fill: 'forwards'
        });
    }

    resetAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
        if (this.progressAnimation) {
            this.progressAnimation.cancel();
        }
        this.startAutoPlay();
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SmoothRoboticsCarousel();
});