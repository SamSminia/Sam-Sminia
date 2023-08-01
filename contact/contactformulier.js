const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
  if (!contactForm.checkValidity()) {
    // Voorkom dat het formulier wordt verzonden als niet alle velden zijn ingevuld
    event.preventDefault();
    alert('Vul alle verplichte velden in.');
  }
})            