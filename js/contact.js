 document.addEventListener('DOMContentLoaded', function() {
     const contactForm = document.querySelector('.contact-form');
     const formMessage = document.querySelector('.form-message');

     // Handle contact form submission
     contactForm.addEventListener('submit', function(e) {
         e.preventDefault();

         const submitBtn = this.querySelector('.submit-btn');
         const originalText = submitBtn.textContent;

         // Update button state
         submitBtn.textContent = 'Sending...';
         submitBtn.disabled = true;

         // Hide any previous messages
         formMessage.style.display = 'none';
         formMessage.classList.remove('success', 'error');

         // Prepare form data
         const formData = new FormData(contactForm);
         const object = Object.fromEntries(formData);
         const json = JSON.stringify(object);

         // Submit to Web3Forms
         fetch('https://api.web3forms.com/submit', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 },
                 body: json
             })
             .then(async(response) => {
                 let result = await response.json();

                 if (response.status === 200) {
                     // Success
                     formMessage.style.display = 'block';
                     formMessage.classList.add('success');
                     formMessage.innerHTML = '✅ Message sent successfully! I\'ll get back to you soon.';

                     // Reset form
                     contactForm.reset();

                     // Clear success message after 5 seconds
                     setTimeout(() => {
                         formMessage.style.display = 'none';
                         formMessage.classList.remove('success');
                     }, 5000);
                 } else {
                     // Error from API
                     throw new Error(result.message || 'Form submission failed');
                 }
             })
             .catch(error => {
                 console.error('Error:', error);

                 // Show error message
                 formMessage.style.display = 'block';
                 formMessage.classList.add('error');
                 formMessage.innerHTML = '❌ Something went wrong! Please try again or contact me directly.';

                 // Clear error message after 5 seconds
                 setTimeout(() => {
                     formMessage.style.display = 'none';
                     formMessage.classList.remove('error');
                 }, 5000);
             })
             .finally(() => {
                 // Reset button state
                 submitBtn.textContent = originalText;
                 submitBtn.disabled = false;
             });
     });
 });