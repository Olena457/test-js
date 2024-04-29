// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// document.addEventListener('DOMContentLoaded', function () {
//   const accordion = new Accordion('.accordion', {
//     duration: 600,
//     showMultiple: false,
//   });

//   const accButtons = document.querySelectorAll('.ac-trigger');

//   accButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const acItem = btn.closest('.ac-item');

//       if (acItem.classList.contains('active')) {
//         acItem.classList.remove('active');
//       } else {
//         document.querySelectorAll('.ac-panel.active').forEach(activeItem => {
//           activeItem.classList.remove('active');
//         });

//         acItem.classList.add('active');
//       }
//     });
//   });
// });
// варіант 2 стріла
//
// document.addEventListener('DOMContentLoaded', () => {
//   const accordion = new Accordion('.accordion', {
//     duration: 600,
//     showMultiple: false,
//   });

//   const accButtons = document.querySelectorAll('.ac-trigger');

//   accButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const acItem = btn.closest('.ac-item');

//       if (acItem.classList.contains('open')) {
//         acItem.classList.remove('open');
//       } else {
//         document.querySelectorAll('.ac-item.open').forEach(activeItem => {
//           activeItem.classList.remove('open');
//         });
//         acItem.classList.add('open');
//       }
//     });
//   });

//   document.querySelectorAll('.ac-arrow').forEach(button => {
//     button.addEventListener('click', () => {
//       button.classList.toggle('up');
//       button.classList.toggle('down');
//     });
//   });

//   document.querySelectorAll('.ac-item.open').forEach(activeItem => {
//     activeItem.classList.remove('open');
//   });
// });

// лінія свг
// document.addEventListener('DOMContentLoaded', function () {
//   const accordion = new Accordion('.accordion', {
//     duration: 600,
//     showMultiple: false,
//   });

//   const accButtons = document.querySelectorAll('.ac-trigger');
//   const line = document.querySelector('#myLine');

//   accButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const acItem = btn.closest('.ac-item');

//       if (acItem.classList.contains('open')) {
//         acItem.classList.remove('open');
//         line.style.height = '332px';
//       } else {
//         document.querySelectorAll('.ac-item.open').forEach(activeItem => {
//           activeItem.classList.remove('open');
//         });

//         acItem.classList.add('open');
//         const acContent = acItem.querySelector('.ac-item');
//         line.style.height = acContent.scrollHeight + 'px';
//       }
//     });
//   });

//   document.querySelectorAll('.ac-item.open').forEach(activeItem => {
//     activeItem.classList.remove('open');
//   });
// });
// самі закриваються
// document.addEventListener('DOMContentLoaded', function () {
//   const accordion = new Accordion('.accordion', {
//     duration: 600,
//     showMultiple: false,
//   });

//   const accButtons = document.querySelectorAll('.ac-trigger');

//   accButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const acItem = btn.closest('.ac-item');

//       if (acItem.classList.contains('open')) {
//         acItem.classList.remove('open');
//       } else {
//         document.querySelectorAll('.ac-item.open').forEach(activeItem => {
//           activeItem.classList.remove('open');
//         });

//         acItem.classList.add('open');
//       }
//     });
//   });

//   document.querySelectorAll('.ac-item.open').forEach(activeItem => {
//     activeItem.classList.remove('open');
//   });
// });
