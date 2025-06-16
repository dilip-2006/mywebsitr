document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projectModal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    
    // Generate project cards
    function generateProjectCards() {
        projectsGrid.innerHTML = '';
        
        Object.keys(projectData).forEach(id => {
            const project = projectData[id];
            
            const projectCard = document.createElement('div');
            projectCard.className = 'mac-window project-card';
            projectCard.dataset.projectId = id;
            
            projectCard.innerHTML = `
                <div class="window-header">
                    <div class="window-buttons">
                        <div class="window-button close-btn"></div>
                        <div class="window-button minimize-btn"></div>
                        <div class="window-button maximize-btn"></div>
                    </div>
                    <div class="window-title">${getFileExtension(project.title)}</div>
                </div>
                <div class="window-content project-content">
                    <img src="${project.images[0]}" alt="${project.title}" class="project-img">
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${getShortDescription(project.description)}</p>
                        <div class="project-tags">
                            ${generateTags(project.tags)}
                        </div>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
            
            // Add click event to open modal
            projectCard.addEventListener('click', function() {
                openProjectModal(id);
            });
        });
    }
    
    // Helper function to get file extension based on project title
    function getFileExtension(title) {
        const extensions = {
            'Autonomous Mobile Robot': 'AMR.cpp',
            'Arduino-Braccio': 'robotic-arm.cpp',
            'Dobot Magician': 'Dobot.h',
            'Human & Line Following Robots': 'HumanAndLineFollowing.toml',
            'TurtleBot': 'turtle.yaml',
            'FPV Drone': 'Drone.step',
            'Computer Vision': 'opencv.npy',
            'Autonomous Incineration Bot': 'incineration.npy'
        };
        
        // Default fallback
        let filename = title.toLowerCase().replace(/\s+/g, '-') + '.js';
        
        // Check if we have a specific extension defined
        for (const key in extensions) {
            if (title.includes(key)) {
                return extensions[key];
            }
        }
        
        return filename;
    }
    
    // Helper function to get short description (first 150 characters)
    function getShortDescription(html) {
        // Remove HTML tags and get plain text
        const plainText = html.replace(/<[^>]*>/g, '');
        return plainText.substring(0, 150) + (plainText.length > 150 ? '...' : '');
    }
    
    // Helper function to generate tags
    function generateTags(tags) {
        if (!tags || !Array.isArray(tags)) return '';
        
        return tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    }
    
    // Open project modal
    function openProjectModal(projectId) {
        const project = projectData[projectId];
        
        if (project) {
            // Populate modal with project data
            document.getElementById('modal-project-title').textContent = project.title;
            document.getElementById('modal-project-description').innerHTML = project.description;
            document.getElementById('modal-project-tech').innerHTML = project.tech;
            document.getElementById('modal-project-links').innerHTML = project.links;
            
            // Update the images in the modal
            const modalImages = document.querySelector('.modal-images');
            modalImages.innerHTML = ''; // Clear existing images
            
            // Add project-specific images
            if (project.images && project.images.length > 0) {
                project.images.forEach((imgSrc, index) => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.alt = `${project.title} Image ${index + 1}`;
                    img.className = 'modal-img';
                    modalImages.appendChild(img);
                });
            }
            
            // Show modal
            projectModal.classList.add('active');
            
            // Apply animations to tech items
            setTimeout(() => {
                const techItems = document.querySelectorAll('#modal-project-tech li');
                techItems.forEach((item, index) => {
                    item.style.setProperty('--tech-index', index);
                });
            }, 100);
        }
    }
    
    // Close project modal
    modalClose.addEventListener('click', function() {
        projectModal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
        }
    });
    
    // Escape key closes modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            projectModal.classList.remove('active');
        }
    });
    
    // Initialize project cards
    generateProjectCards();
});