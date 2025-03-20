const menuToggle = document.querySelector('.menu-toggle');
const headerMenu = document.querySelector('.header-menu');
menuToggle.addEventListener('click', () => {
    console.log(headerMenu.style.display)
    if (headerMenu.style.display === 'flex') {
        headerMenu.style.display = 'none';
    } else {
        headerMenu.style.display = 'flex';
    }
});