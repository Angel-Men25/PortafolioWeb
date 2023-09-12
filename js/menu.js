const openMenuBtn = document.querySelector('.open-menu');
const menu = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('.close-menu');
const menuLinks = document.querySelectorAll('.hero__link');

openMenuBtn.addEventListener('click', () => {
  menu.classList.add('show')
})

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('show')
})

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  })
});