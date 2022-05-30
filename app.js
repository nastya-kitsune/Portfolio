const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
    const nav = document.querySelector('.nav');
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('active');
        nav.classList.toggle('active');
    });
}