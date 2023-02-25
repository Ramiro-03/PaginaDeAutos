document.querySelector(".menu-btn").addEventListener("click", () =>{
    document.querySelector(".nav-menu").classList.toggle("show");
});

$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

ScrollReveal().reveal('.presentacion');
ScrollReveal().reveal('.contenedor-de-imagenes');
ScroolReveal().reveal('.links');