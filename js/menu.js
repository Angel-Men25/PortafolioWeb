const openMenuBtn = document.querySelector('.open-menu');
const menu = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('.close-menu');
const menuLinks = document.querySelectorAll('.hero__link');

openMenuBtn.addEventListener('click', () => {
  menu.classList.add('show');
  document.body.classList.add('no-scroll');
})

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('show');
  document.body.classList.remove('no-scroll');
})

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  })
});