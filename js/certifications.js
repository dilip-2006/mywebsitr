document.addEventListener('DOMContentLoaded', function() {
    const certificationsContainer = document.getElementById('certificationsContainer');
    const certificateModal = document.getElementById('certificateModal');
    
    // Generate certification terminals
    function generateCertificationTerminals() {
        certificationsContainer.innerHTML = '';
        
        certificationsData.forEach(cert => {
            const certTerminal = document.createElement('div');
            certTerminal.className = 'terminal-window';
            
            certTerminal.innerHTML = `
                <div class="terminal-header">
                    <div class="header-buttons">
                        <div class="button close"></div>
                        <div class="button minimize"></div>
                        <div class="button maximize"></div>
                    </div>
                    <div class="terminal-title">${cert.filename}</div>
                </div>
                <div class="terminal-content">
                    <div class="cert-header">
                        <div class="cert-logo">${cert.logo}</div>
                        <div class="cert-info">
                            <h2>${cert.title}</h2>
                            <p>${cert.institution}</p>
                            <p>Click to view Certificate.</p>
                        </div>
                    </div>
                    <div class="cert-details">
                        <div class="details-content">
                            <p>${cert.description}</p>
                            <a href="${cert.certificateUrl}" class="view-button" target="_blank">View Certificate</a>
                        </div>
                    </div>
                </div>
            `;
            
            certificationsContainer.appendChild(certTerminal);
            
            // Add click event to toggle details
            certTerminal.addEventListener('click', function() {
                toggleDetails(this);
            });
            
            // Prevent click propagation on certificate link
            const certLink = certTerminal.querySelector('.view-button');
            certLink.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });
    }
    
    // Toggle certificate details
    function toggleDetails(card) {
        // Add bounce animation
        card.classList.add('bounce-animation');
        setTimeout(() => {
            card.classList.remove('bounce-animation');
        }, 500);
        
        const details = card.querySelector('.cert-details');
        
        // Close all other cards
        document.querySelectorAll('.terminal-window').forEach(otherCard => {
            if (otherCard !== card) {
                const otherDetails = otherCard.querySelector('.cert-details');
                otherDetails.style.maxHeight = "0";
                otherDetails.style.padding = "0 0";
                otherDetails.style.marginTop = "0";
            }
        });
        
        // Toggle the clicked card
        if (details.style.maxHeight && details.style.maxHeight !== "0px") {
            details.style.maxHeight = "0";
            details.style.padding = "0 0";
            details.style.marginTop = "0";
        } else {
            details.style.maxHeight = details.scrollHeight + 40 + "px";
            details.style.padding = "0";
            details.style.marginTop = "15px";
        }
    }
    
    // Close certificate modal
    function closeModal() {
        certificateModal.classList.remove('active');
    }
    
    // Initialize certification terminals
    generateCertificationTerminals();
    
    // Make closeModal function available globally
    window.closeModal = closeModal;
    window.toggleDetails = toggleDetails;
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === certificateModal) {
            closeModal();
        }
    });
    
    // Escape key closes modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});