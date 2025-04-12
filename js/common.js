$(function () {
  // ハンバーガーボタンクリックで実行
  $("#humburger").click(function () {
    $(this).toggleClass("close");
    $(".main-nav").toggleClass("panelactive");
  });
  // function
});



// ページトップにスクロールで戻す動き
$(function(){
    const $pagetop = $(".pagetop-btn");

    $pagetop.click(function () {
        $('html,body').stop().animate(
            {
                scrollTop:0
            },
            500
        );
        return false;
    });
});

//footerに被らないように調整
function adjustFixedBox() {
  const $footer = $('footer');
  const $fixedBox = $('.pagetop-btn');
  const footerTop = $footer.offset().top;
  const windowBottom = $(window).scrollTop() + $(window).height();
  let targetBottom;

  if (footerTop < windowBottom) {
    const overlap = windowBottom - footerTop - 80;
    $fixedBox.css('bottom', overlap);
  } else {
    $fixedBox.css('bottom', '60px');
  }
}

$(window).on('scroll resize load', adjustFixedBox);



var rellax = new Rellax('.parallax-box');