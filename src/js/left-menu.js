const leftMenu = document.querySelector('.left-menu');
const leftMenuClose = document.querySelector('.left-menu__fog');
const leftMenuOpenBtn = document.querySelector('.menu__main-menu-button--main');
const leftMenuCloseBtn = document.querySelector('.left-menu__close');

leftMenuOpenBtn.addEventListener('click', function () {
    leftMenu.classList.replace('left-menu--hide', 'left-menu--show');
});

leftMenuCloseBtn.addEventListener('click', function () {
    leftMenu.classList.replace('left-menu--show', 'left-menu--hide');
});

leftMenuClose.addEventListener('click', function () {
    leftMenu.classList.replace('left-menu--show', 'left-menu--hide');
});