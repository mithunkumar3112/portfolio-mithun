document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('contact-form');
  const status = document.getElementById('msg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[name="NAME"]').value.trim();
    const email = form.querySelector('input[name="EMAIL"]').value.trim();
    const message = form.querySelector('textarea[name="MESSAGE"]').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill all fields.';
      return;
    }

    status.textContent = 'Thanks! This is a demo contact form.';
    form.reset();

    setTimeout(() => status.textContent = '', 5000);
  });

});
