document.addEventListener('DOMContentLoaded', function() {
    const skillsContainer = document.getElementById('skillsContainer');
    
    // Generate skill categories
    function generateSkillCategories() {
        skillsContainer.innerHTML = '';
        
        skillsData.forEach(category => {
            const skillCategory = document.createElement('div');
            skillCategory.className = 'mac-window skill-category';
            
            skillCategory.innerHTML = `
                <div class="window-header">
                    <div class="window-buttons">
                        <div class="window-button close-btn"></div>
                        <div class="window-button minimize-btn"></div>
                        <div class="window-button maximize-btn"></div>
                    </div>
                    <div class="window-title">${category.filename}</div>
                </div>
                <div class="window-content">
                    <div class="skills-header">
                        <i class="${category.icon}"></i>
                        <h3>${category.category}</h3>
                    </div>
                    <ul class="skills-list">
                        ${generateSkillItems(category.skills)}
                    </ul>
                </div>
            `;
            
            skillsContainer.appendChild(skillCategory);
        });
    }
    
    // Helper function to generate skill items
    function generateSkillItems(skills) {
        return skills.map(skill => `
            <li class="skill-item">
                <div class="skill-info">
                    <span>${skill.name}</span>
                    <span>${skill.progress}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" data-progress="${skill.progress}"></div>
                </div>
            </li>
        `).join('');
    }
    
    // Initialize skill categories
    generateSkillCategories();
    
    // Animate skill progress bars when skills section is visible
    const skillsSection = document.querySelector('#skills');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateSkills, 300);
                skillsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    skillsObserver.observe(skillsSection);
    
    // Animate skill progress bars
    function animateSkills() {
        const skillProgress = document.querySelectorAll('.skill-progress');
        
        skillProgress.forEach(progress => {
            const value = progress.getAttribute('data-progress');
            progress.style.width = value + '%';
        });
    }
});