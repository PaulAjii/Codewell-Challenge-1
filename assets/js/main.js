// NAVIGATION MENU FOR MOBILE RESPONSIVENESS

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLink = document.querySelectorAll('.nav__link');
      
if (navToggle) {
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show__nav');
  });
}

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show__nav');
  });
}

function linkAction() {
  navMenu.classList.remove('show__nav');
}

navLink.forEach(e => {
  e.addEventListener('click', linkAction);
});