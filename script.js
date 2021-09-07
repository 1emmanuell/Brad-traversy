const hamburger = document.getElementbyId('hamburger');
const navUL = document.getElementsByClassName('navul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});