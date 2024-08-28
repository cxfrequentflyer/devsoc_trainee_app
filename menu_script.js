let lastScrollTop = 0;
const header = document.querySelector('header');
        
window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.transform === 'translateX(0%)') {
        sideMenu.style.transform = 'translateX(-100%)';
    } else {
        sideMenu.style.transform = 'translateX(0%)';
    }
}