$(document).ready(function() {
    var mySwiper = new Swiper ('.swiper-container',{
        direction: 'horizontal',
        width: 80,        
        loop: false,
        navigation: {
            nextEl: '.swiper-header-button-next',
            prevEl: '.swiper-header-button-prev',
        }
    })       
});
