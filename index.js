// Responsive menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll effect (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});

// Simple contact form submission alert
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  e.target.reset();
});

// Highlight active section in nav on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
  //   link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
  //     link.classList.add('active');
    }
  });
});
