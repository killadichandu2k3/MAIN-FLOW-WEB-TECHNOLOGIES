document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let valid = true;
        const formData = new FormData(contactForm);
        
        contactForm.querySelectorAll('.error-message').forEach(error => error.remove());
        contactForm.querySelectorAll('.error').forEach(field => field.classList.remove('error'));

        for (let [name, value] of formData.entries()) {
            const input = contactForm.querySelector(`[name="${name}"]`);
            if (!value) {
                valid = false;
                input.classList.add('error');
                const errorMessage = document.createElement('div');
                errorMessage.classList.add('error-message');
                errorMessage.innerText = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
                input.parentNode.appendChild(errorMessage);
            }
        }
        
        if (valid) {
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    });

    const updateContentButton = document.getElementById('update-content');
    updateContentButton.addEventListener('click', () => {
        const portfolioDescription = document.querySelector('.portfolio-description');
        portfolioDescription.innerHTML = `
            <h3>Updated Content!</h3>
            <p>This is the new content added dynamically by JavaScript. It demonstrates how content can be updated without reloading the page.</p>
        `;
    });
});
