 class MacOSDock {
     constructor() {
         this.dock = document.getElementById('dock');
         this.dockItems = document.querySelectorAll('.dock-item');
         this.sectionDisplay = document.getElementById('sectionDisplay');
         this.magnificationRange = 150;
         this.maxScale = 1.40;
         this.runningApps = ['Home'];
         this.hideTimeout = null;
         this.currentHoveredItem = null;

         this.init();
     }

     init() {
         this.setupEventListeners();
         this.showRunningIndicators();
         this.createMagnificationEffect();
         this.setupSectionDisplay();

         // Add some initial animation when page loads
         setTimeout(() => {
             this.dock.style.transform = 'scale(1) translateY(0)';
             this.dock.style.opacity = '1';
         }, 300);
     }

     setupEventListeners() {
         // Mouse movement for magnification
         this.dock.addEventListener('mousemove', (e) => {
             this.handleMagnification(e);
         });

         this.dock.addEventListener('mouseleave', () => {
             this.resetMagnification();
             this.hideSectionDisplay();
         });

         // Click events with navigation
         this.dockItems.forEach(item => {
             item.addEventListener('click', (e) => {
                 e.preventDefault();
                 this.handleAppClick(e.currentTarget);
             });
         });

         // Window resize handler
         window.addEventListener('resize', () => {
             if (this.currentHoveredItem) {
                 this.updateSectionDisplayPosition(this.currentHoveredItem);
             }
         });
     }

     setupSectionDisplay() {
         // Show section display when hovering over any dock item
         this.dockItems.forEach((item) => {
             item.addEventListener('mouseenter', () => {
                 clearTimeout(this.hideTimeout);
                 this.currentHoveredItem = item;

                 const sectionName = item.getAttribute('data-tooltip');
                 this.sectionDisplay.textContent = sectionName;
                 this.sectionDisplay.classList.add('show');

                 // Update position with smooth animation
                 this.updateSectionDisplayPosition(item);

                 // Add a subtle bounce effect to the section display
                 setTimeout(() => {
                     if (this.currentHoveredItem === item) {
                         this.sectionDisplay.style.transform += ' scale(1.05)';
                         setTimeout(() => {
                             if (this.currentHoveredItem === item) {
                                 this.sectionDisplay.style.transform = this.sectionDisplay.style.transform.replace(' scale(1.05)', '');
                             }
                         }, 150);
                     }
                 }, 100);
             });

             item.addEventListener('mouseleave', () => {
                 this.currentHoveredItem = null;
             });
         });

         // Keep section display visible when hovering over it
         this.sectionDisplay.addEventListener('mouseenter', () => {
             clearTimeout(this.hideTimeout);
         });

         this.sectionDisplay.addEventListener('mouseleave', () => {
             this.hideSectionDisplay();
         });
     }

     updateSectionDisplayPosition(item) {
         const itemRect = item.getBoundingClientRect();
         const dockRect = this.dock.getBoundingClientRect();

         // Calculate the center position of the hovered item relative to the dock
         const itemCenter = itemRect.left + itemRect.width / 2;
         const dockCenter = dockRect.left + dockRect.width / 2;
         const offset = itemCenter - dockCenter;

         // Apply the offset to center the section display above the hovered item
         this.sectionDisplay.style.transform = `translateX(${offset}px)`;
     }

     hideSectionDisplay() {
         this.currentHoveredItem = null;
         this.hideTimeout = setTimeout(() => {
             this.sectionDisplay.classList.remove('show');
             // Reset transform when hiding
             setTimeout(() => {
                 this.sectionDisplay.style.transform = 'translateX(0)';
             }, 200);
         }, 300);
     }

     handleMagnification(e) {
         const dockRect = this.dock.getBoundingClientRect();
         const mouseX = e.clientX - dockRect.left;

         this.dockItems.forEach((item) => {
             const itemRect = item.getBoundingClientRect();
             const itemCenterX = itemRect.left + itemRect.width / 2 - dockRect.left;
             const distance = Math.abs(mouseX - itemCenterX);

             let scale = 1;
             if (distance < this.magnificationRange) {
                 const proximity = 1 - (distance / this.magnificationRange);
                 const curvedProximity = Math.sin(proximity * Math.PI * 0.5);
                 scale = 1 + (curvedProximity * (this.maxScale - 1));

                 const secondaryRange = this.magnificationRange * 1.3;
                 if (distance > this.magnificationRange && distance < secondaryRange) {
                     const secondaryProximity = 1 - ((distance - this.magnificationRange) / (secondaryRange - this.magnificationRange));
                     scale = 1 + (secondaryProximity * 0.15);
                 }
             }

             scale = this.easeOutCubic(scale - 1) + 1;

             item.style.transform = `scale(${scale}) translateY(${(scale - 1) * -6}px)`;
             item.style.zIndex = Math.floor(scale * 10);
         });
     }

     resetMagnification() {
         this.dockItems.forEach(item => {
             item.style.transform = 'scale(1) translateY(0px)';
             item.style.zIndex = 'auto';
         });
     }

     handleAppClick(item) {
         const appName = item.getAttribute('data-tooltip');

         // Remove active class and running indicator from all items
         this.dockItems.forEach(i => {
             i.classList.remove('active');
             this.hideRunningIndicator(i);
         });

         // Add active class to clicked item
         item.classList.add('active');
         this.showRunningIndicator(item);

         // Add bounce animation
         item.classList.add('bounce');

         // Remove animation class after animation completes
         setTimeout(() => {
             item.classList.remove('bounce');
         }, 600);

         // Navigate to section
         const href = item.getAttribute('href');
         if (href && href.startsWith('#')) {
             const target = document.querySelector(href);
             if (target) {
                 // Show section transition
                 const sectionTransition = document.querySelector('.section-transition');
                 if (sectionTransition) {
                     sectionTransition.classList.add('active');
                 }

                 setTimeout(() => {
                     // Hide all sections
                     document.querySelectorAll('section').forEach(section => {
                         section.classList.remove('active');
                     });

                     // Show target section
                     target.classList.add('active');

                     // Scroll to target section
                     window.scrollTo({
                         top: 0,
                         behavior: 'smooth'
                     });

                     // Hide section transition
                     if (sectionTransition) {
                         setTimeout(() => {
                             sectionTransition.classList.remove('active');
                         }, 300);
                     }
                 }, 300);
             }
         }

         console.log('Navigating to:', appName);

         // Simulate page navigation effect
         this.sectionDisplay.textContent = `Loading ${appName}...`;

         setTimeout(() => {
             this.sectionDisplay.textContent = appName;
         }, 800);
     }

     showRunningIndicators() {
         const activeItem = document.querySelector('.dock-item.active');
         if (activeItem) {
             this.showRunningIndicator(activeItem);
         }
     }

     showRunningIndicator(item) {
         const indicator = item.querySelector('.running-indicator');
         if (indicator) {
             indicator.style.opacity = '1';
             indicator.style.transform = 'translateX(-50%) scale(1)';
         }
     }

     hideRunningIndicator(item) {
         const indicator = item.querySelector('.running-indicator');
         if (indicator) {
             indicator.style.opacity = '0';
             indicator.style.transform = 'translateX(-50%) scale(0)';
         }
     }

     createMagnificationEffect() {
         this.dockItems.forEach(item => {
             item.addEventListener('mouseenter', () => {
                 if (!this.dock.matches(':hover')) return;
                 item.style.filter = 'brightness(1.08) saturate(1.1)';
             });

             item.addEventListener('mouseleave', () => {
                 item.style.filter = 'brightness(1) saturate(1)';
             });
         });
     }

     easeOutCubic(t) {
         return 1 - Math.pow(1 - t, 3);
     }
 }

 // Initialize the dock when DOM is ready
 document.addEventListener('DOMContentLoaded', () => {
     new MacOSDock();
 });