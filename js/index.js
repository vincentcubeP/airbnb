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


/* globa popup */
$(document).ready(function(){
  
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  
  })

/* popup */
window.onload = function() {
    function show0 () {
        document.querySelector(".popup-global").className = "popup-global show-global";
    }
    function close0 () { 
        document.querySelector(".popup-global").className = "popup-global";
    }
    document.querySelector("#show-global").addEventListener('click', show0);
    document.querySelector("#close-global").addEventListener('click', close0);
    document.querySelector("#global-popup-bg").addEventListener('click', close0);

    // function show () {
    //     document.querySelector(".popup-lang").className = "popup-lang show";
    // }
    // function close () { 
    //     document.querySelector(".popup-lang").className = "popup-lang";
    // }
    // document.querySelector("#show").addEventListener('click', show);
    // document.querySelector("#close").addEventListener('click', close);
    // document.querySelector("#popup-bg").addEventListener('click', close);

    // function show1 () {
    //     document.querySelector(".popup-curr").className = "popup-curr show1";
    // }
    // function close1 () { 
    //     document.querySelector(".popup-curr").className = "popup-curr";
    // }
    // document.querySelector("#show1").addEventListener('click', show1);
    // document.querySelector("#close1").addEventListener('click', close1);
    // document.querySelector("#popup-bg1").addEventListener('click', close1);

    function show2 () {
        document.querySelector(".popup-etc").className = "popup-etc show2";
    }
    function close2 () { 
        document.querySelector(".popup-etc").className = "popup-etc";
    }
    document.querySelector("#show2").addEventListener('click', show2);
    document.querySelector("#close2").addEventListener('click', close2);
    document.querySelector(".popup-etc").addEventListener('click', close2);
};

$(document).on("click", "#show", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show");
  });
$(document).on("click", "#close", function (e){
    var target = $(this).attr("href");
    $(target).removeClass("show");
});
$(document).mouseup(function (e){
    var LayerPopup = $(".popup-lang");
    if(LayerPopup.has(e.target).length === 0){
        LayerPopup.removeClass("show");
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
    var LayerPopup = $(".popup-curr");
    if(LayerPopup.has(e.target).length === 0){
        LayerPopup.removeClass("show1");
    }
  });