const hamburgerIcon = document.querySelector('.hamburger-menu-container');
const headerContainer = document.querySelector('.header-container');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('nav');


hamburgerIcon.addEventListener('click',()=>{
  nav.style.right ='24px';
  hamburgerIcon.style.display = 'none';
})

closeIcon.addEventListener('click',()=>{
  nav.style.right='-200px';
  hamburgerIcon.style.display = 'block'
})

// document.querySelector('.go-to-top').scrollY(0);


