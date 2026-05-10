// Бул JavaScript файл жөнөкөй интерактив элементтер үчүн колдонулат.
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('nav-open');
    menuToggle.classList.toggle('open');
  });
}

// Жогорудагы код мобилдик меню үчүн меню басылганда меню ачып-жабат.
