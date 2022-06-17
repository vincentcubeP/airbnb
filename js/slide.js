$(document).ready(function() {
    var mySwiper = new Swiper ('.swiper-container',{
        direction: 'horizontal',
        width: 200,        
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});