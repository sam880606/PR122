// Basic script.js functionality can be added here, such as form validation or interactive elements.
document.addEventListener('DOMContentLoaded', function() {
  // Example: Simple form validation (expand as needed)
  const contactForms = document.querySelectorAll('.contact-form');

  contactForms.forEach(contactForm => {
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        let isValid = true;
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageTextarea = contactForm.querySelector('textarea');

        if (nameInput && !nameInput.value.trim()) {
          alert('Please enter your name.');
          isValid = false;
        }

        if (emailInput && !emailInput.value.trim()) {
          alert('Please enter your email.');
          isValid = false;
        } else if (emailInput && !isValidEmail(emailInput.value.trim())) {
          alert('Please enter a valid email address.');
          isValid = false;
        }

        if (messageTextarea && !messageTextarea.value.trim()) {
          alert('Please enter your inquiry.');
          isValid = false;
        }

        if (!isValid) {
          event.preventDefault(); // Prevent form submission if validation fails
        } else {
          alert('Thank you for your inquiry!');
        }
      });
    }
  });

  // Simple email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gi;
    return emailRegex.test(email);
  }

  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Sticky navigation functionality
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    });
  }
});