// Selectors
const navButtons = document.querySelectorAll('.nav-buttons ul li a');
const heroCtaButton = document.querySelector('.hero-section .cta-button');
const petCards = document.querySelectorAll('.pet-card');
const tipsList = document.querySelectorAll('.tips-corner ul li');
const footerLinks = document.querySelectorAll('.footer-section.links ul li a');
const contactForm = document.querySelector('.footer-section.contact-form form');

// Event Listeners
navButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(`Navigated to ${button.textContent}`);
  });
});

heroCtaButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Adopt Now button clicked');
});

petCards.forEach((card) => {
  card.addEventListener('click', (e) => {
    console.log(`Pet card clicked: ${card.querySelector('h3').textContent}`);
  });
});

tipsList.forEach((tip) => {
  tip.addEventListener('click', (e) => {
    console.log(`Tip clicked: ${tip.textContent}`);
  });
});

footerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(`Footer link clicked: ${link.textContent}`);
  });
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = contactForm.email.value;
  const message = contactForm.message.value;
  console.log(`Contact form submitted: ${email} - ${message}`);
});
