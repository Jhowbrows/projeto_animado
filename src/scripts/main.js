document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.querySelectorAll('[data-menu-toggle]');
    const menu = document.querySelector('.header__mobile__links');

    for( let i = 0; i < menuToggle.length; i++) {
        menuToggle[i].addEventListener('click', openCloseToggle);
    }

    document.addEventListener('click', function(event) {
        if (!menuToggle[0].contains(event.target)) {
            menu.classList.remove('header__mobile__links--is-open')
        }
    });
    
    
})
    
function openCloseToggle() {
    const addClass = 'header__mobile__links--is-open';
    const selectElement = document.querySelector('.header__mobile__links')
    
    selectElement.classList.toggle(addClass)
}