/* modal popup */
// $(document).ready(function( $ ){
//     $(".header-login").on("click", function(event) { //팝업오픈 버튼 누르면
//     $("#modal").show(); //팝업 오픈
//     });
    
//     $("body").on("click", function(event) {
//         if(event.target.className == 'header-login'){
//             $("#modal").hide(); //close버튼 이거나 뒷배경 클릭시 팝업 삭제
//         }
//     });
// });

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


/* popup */
window.onload = function() {
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
};
