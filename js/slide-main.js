$(document).ready(function() {
    var mySwiper = new Swiper ('.swiper-slide-main',{
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
          },
    })    
});