document.addEventListener('DOMContentLoaded', function() {
    const researchContainer = document.getElementById('researchContainer');

    // Generate research items
    function generateResearchItems() {
        researchContainer.innerHTML = '';

        researchData.forEach(research => {
            const researchItem = document.createElement('div');
            researchItem.className = 'mac-window research-item';

            researchItem.innerHTML = `
                <div class="window-header">
                    <div class="window-buttons">
                        <div class="window-button close-btn"></div>
                        <div class="window-button minimize-btn"></div>
                        <div class="window-button maximize-btn"></div>
                    </div>
                    <div class="window-title">research_paper_${research.title.substring(0, 10).toLowerCase().replace(/\s+/g, '_')}.pdf</div>
                </div>
                <div class="window-content">
                    <div class="research-meta">
                        <span>${research.journal}</span>
                        <span>${research.date}</span>
                    </div>
                    <h3>${research.title}</h3>
                    <p>${research.description}</p>
                    <a href="${research.url}"  class="btn" target="_blank">View Publication</a>
                </div>
            `;

            researchContainer.appendChild(researchItem);
        });
    }

    // Initialize research items
    generateResearchItems();
});