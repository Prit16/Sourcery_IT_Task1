document.addEventListener('DOMContentLoaded', () => {
    // Call-to-action button animation
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
      });
  
      button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
      });
    });
  
    // Form submission alert
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Your message has been sent!');
    });
  });
  