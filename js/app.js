// AÑO DEL COPYRIGHT
const añoFooter = document.querySelector('#año-actual');
let año = new Date();
añoFooter.innerHTML = `${año.getFullYear()}`