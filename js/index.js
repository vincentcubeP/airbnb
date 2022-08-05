

/* modal popup */
// 팝업 열기
$(document).on("click", ".header-login", function (e){
    var target = $(this).attr("href");
    $(target).addClass("modal-show");    
}); 
// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
    var LayerPopup = $(".modal-box");
    if(LayerPopup.has(e.target).length === 0){
        LayerPopup.removeClass("modal-show");
    }
});


/* global popup */
$(document).on("click", "#header-global", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show-global");

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('scrollLock');
});
$(document).on("click", "#close-global", function (e){
    var target = $(this).attr("href");
    $(target).removeClass("show-global");

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
});
$(document).mouseup(function (e){
    var LayerPopup = $(".global-popup-window");
    if(LayerPopup.has(e.target).length === 0){
        $(".popup-global").removeClass("show-global");
    }

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
});

$(document).ready(function(){  
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  
})

/* filter popup */
$(document).on("click", ".header-filter", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show-filter");

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('scrollLock');
});
$(document).on("click", "#close-filter", function (e){
    var target = $(this).attr("href");
    $(target).removeClass("show-filter");

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
});
$(document).mouseup(function (e){
    var LayerPopup = $(".popup-filter-window");
    if(LayerPopup.has(e.target).length === 0){
        $(".popup-filter").removeClass("show-filter");
    }

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
});

/* popup */
$(document).on("click", "#show", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show");

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('scrollLock');
});
$(document).on("click", "#close", function (e){
    var target = $(this).attr("href");
    $(target).removeClass("show");

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
});
$(document).mouseup(function (e){
    var LayerPopup = $(".popup-window");
    if(LayerPopup.has(e.target).length === 0){
        $(".popup-lang").removeClass("show");
    }

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
});

$(document).on("click", "#show1", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show1");

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('scrollLock');
});
$(document).on("click", "#close1", function (e){
    var target = $(this).attr("href");
    $(target).removeClass("show1");

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
});
$(document).mouseup(function (e){
    var LayerPopup = $(".popup-window");
    if(LayerPopup.has(e.target).length === 0){
        $(".popup-curr").removeClass("show1");
    }

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
});

$(document).on("click", "#show2", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show2");

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('scrollLock');
});
$(document).on("click", "#close2", function (e){
    var target = $(this).attr("href");
    $(target).removeClass("show2");

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
});
$(document).mouseup(function (e){
    var LayerPopup = $(".popup-window");
    if(LayerPopup.has(e.target).length === 0){
        $(".popup-etc").removeClass("show2");
    }

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
});

/* swiper */
$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        speed: 500,
        breakpoints: {
            640: {
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
            768: {
                slidesPerView: 7,
                slidesPerGroup: 7,
            },
            1024: {
                slidesPerView: 10,
                slidesPerGroup: 10,
            },
        },
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});