/* header slide */
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


/* main slider */
$(document).ready(function() {
    var mySwiper1 = new Swiper1 ('.swiper-slide-main',{
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

/* popup */
function show () {
    document.querySelector(".popup-lang").className = "popup-lang show";
}
function close () { 
    document.querySelector(".popup-lang").className = "popup-lang";
}
document.querySelector("#show").addEventListener('click', show);
document.querySelector("#close").addEventListener('click', close);
document.querySelector("#popup-bg").addEventListener('click', close);

function show1 () {
    document.querySelector(".popup-curr").className = "popup-curr show1";
}
function close1 () { 
    document.querySelector(".popup-curr").className = "popup-curr";
}
document.querySelector("#show1").addEventListener('click', show1);
document.querySelector("#close1").addEventListener('click', close1);
document.querySelector("#popup-bg1").addEventListener('click', close1);

function show2 () {
    document.querySelector(".popup-etc").className = "popup-etc show2";
}
function close2 () { 
    document.querySelector(".popup-etc").className = "popup-etc";
}
document.querySelector("#show2").addEventListener('click', show2);
document.querySelector("#close2").addEventListener('click', close2);
document.querySelector("#popup-bg2").addEventListener('click', close2);