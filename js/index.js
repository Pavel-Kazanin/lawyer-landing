$(document).ready(function(){
  $('.lead__slider').slick({
    dots: true,
    arrows: true,
    appendArrows:$('.control-panel__arrows'),
    appendDots:$('.control-panel__dots'),
    draggable: false
  });
});

const burgerOpenButton = document.querySelector('.menu__burger-icon');
const burgerCloseButton = document.querySelector('.menu__close-button');
const burgerMenu = document.querySelector('.menu__list');

burgerOpenButton.addEventListener('click', function (event) {
  burgerMenu.classList.add('menu__list-active');
});

burgerCloseButton.addEventListener('click', function (event) {
  burgerMenu.classList.remove('menu__list-active');
});