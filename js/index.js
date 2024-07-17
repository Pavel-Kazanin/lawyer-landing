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

$(document).ready(function(){
  console.log("слайдер добавлен");
  $('.services__slider').slick({  
    dots: false,
    arrows: false,
    initialSlide: 0,
    infinite: false,
    slidesToShow: 1,
    focusOnSelect: true       
  });
  someFunc();
});

// Включение и отключение services слайдера, при изменении ширины экрана
function someFunc() {  
  var w = window.innerWidth;
  console.log("dfdjdfj");
  if (w > 560) {
    console.log("22222");
    $('.services__slider').slick('unslick');
  } else {
    $(document).ready(function(){
      $('.services__slider').slick({  
        dots: false,
        arrows: false,
        mobileFirst: true,
        slidesToShow: 2,
        swipeToSlide: true           
      });
    });
  }
  console.log("SomeFunc сработал");
}

// someFunc();

window.addEventListener("resize", function() {
  console.log("Resize сработал");
  someFunc();  
});

// Элементы бургер меню
const burgerOpenButton = document.querySelector('.menu__burger-icon');
const burgerCloseButton = document.querySelector('.menu__close-button');
const burgerMenu = document.querySelector('.menu__list');

// Слушатель клика на открытие бургер меню
// burgerOpenButton.addEventListener('click', function (event) {
//   burgerMenu.classList.add('menu__list-active');
// });

// // Слушатель клика на закрытие бургер меню
// burgerCloseButton.addEventListener('click', function (event) {
//   burgerMenu.classList.remove('menu__list-active');
// });