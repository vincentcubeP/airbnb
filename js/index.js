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
});
$(document).on("click", "#close-global", function (e){
    var target = $(this).attr("href");
    $(target).removeClass("show-global");
});
$(document).mouseup(function (e){
    var LayerPopup = $(".global-popup-window");
    if(LayerPopup.has(e.target).length === 0){
        $(".popup-global").removeClass("show-global");
    }
});


/* filter popup */
$(document).on("click", ".header-filter", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show-filter");
});
$(document).on("click", "#close-filter", function (e){
    var target = $(this).attr("href");
    $(target).removeClass("show-filter");
});
$(document).mouseup(function (e){
    var LayerPopup = $(".popup-filter-window");
    if(LayerPopup.has(e.target).length === 0){
        $(".popup-filter").removeClass("show-filter");
    }
});

/* popup */

$(document).on("click", "#show", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show");
});
$(document).on("click", "#close", function (e){
    var target = $(this).attr("href");
    $(target).removeClass("show");
});
$(document).mouseup(function (e){
    var LayerPopup = $(".popup-window");
    if(LayerPopup.has(e.target).length === 0){
        $(".popup-lang").removeClass("show");
    }
});

$(document).on("click", "#show1", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show1");
});
$(document).on("click", "#close1", function (e){
    var target = $(this).attr("href");
    $(target).removeClass("show1");
});
$(document).mouseup(function (e){
    var LayerPopup = $(".popup-window");
    if(LayerPopup.has(e.target).length === 0){
        $(".popup-curr").removeClass("show1");
    }
});

$(document).on("click", "#show2", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show2");
});
$(document).on("click", "#close2", function (e){
    var target = $(this).attr("href");
    $(target).removeClass("show2");
});
$(document).mouseup(function (e){
    var LayerPopup = $(".popup-window");
    if(LayerPopup.has(e.target).length === 0){
        $(".popup-etc").removeClass("show2");
    }
  });


  /* Swiper JS (Initialize Swiper) */
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
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