/* -------------------------------------------------------
   NAVBAR + MOBILE MENU (CLEAN VERSION)
-------------------------------------------------------- */

const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('navMenuMobile');
const mobileLinks = mobileMenu.querySelectorAll('.nav-link');

/* ===== NAVBAR SCROLL EFFECT ===== */
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ===== HAMBURGER TOGGLE ===== */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  navbar.classList.toggle('menu-open');
});

/* ===== CLOSE MENU ON LINK CLICK ===== */
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    navbar.classList.remove('menu-open');
  });
});
