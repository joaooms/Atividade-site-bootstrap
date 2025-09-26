
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
popoverTriggerList.forEach(el => new bootstrap.Popover(el));


(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault(); 
        const toast = new bootstrap.Toast(document.querySelector('.toast'));
        toast.show();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
