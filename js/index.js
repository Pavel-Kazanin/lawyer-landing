// Инициализация слайдера lead секции
$(document).ready(function(){
  $('.lead__slider').slick({
    dots: true,
    arrows: true,
    appendArrows:$('.control-panel__arrows'),
    appendDots:$('.control-panel__dots'),
    draggable: false
  });
});

// Инициализация слайдера services секции
$(document).ready(function(){  
  $('.services__slider').slick({  
    dots: false,
    arrows: false,
    initialSlide: 0,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true          
  });
  someFunc();
});

// Включение и отключение services слайдера, при изменении ширины экрана
function someFunc() {  
  var w = window.innerWidth;
  if (w > 560) {    
    $('.services__slider').slick('unslick');
  } else {
    $(document).ready(function(){
      $('.services__slider').slick({  
        dots: false,
        arrows: false,
        initialSlide: 0,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true           
      });
    });
  } 
}

window.addEventListener("resize", function() {  
  someFunc();  
});

// Элементы бургер меню
const burgerOpenButton = document.querySelector('.menu__burger-icon');
const burgerCloseButton = document.querySelector('.menu__close-button');
const burgerMenu = document.querySelector('.menu__list');

// Слушатель клика на открытие бургер меню
burgerOpenButton.addEventListener('click', function (event) {
  burgerMenu.classList.add('menu__list_active');
});

// // Слушатель клика на закрытие бургер меню
burgerCloseButton.addEventListener('click', function (event) {
  burgerMenu.classList.remove('menu__list_active');
});