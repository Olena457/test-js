import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const accordion = new Accordion('.accordion', {
    duration: 600,
    showMultiple: true,
  });

  const accButtons = document.querySelectorAll('.ac-trigger');

  accButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const acItem = btn.closest('.ac-item');

      if (acItem.classList.contains('open')) {
        acItem.classList.remove('open');
      } else {
        acItem.classList.add('open');
      }
    });
  });

  document.querySelectorAll('.ac-item.open').forEach(activeItem => {
    activeItem.classList.remove('open');
  });
});
