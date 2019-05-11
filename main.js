//dodanie klika na hamburger 

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  document.querySelector('.main-nav--list').classList.toggle('active-nav');
  hamburger.classList.toggle('active-hamb');
})