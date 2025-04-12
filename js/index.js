// メインビジュアルのオートスライダー
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mv-carousel", {
    spaceBetween: 30,
    loop: true,
    loopedSlides: 10,
    slidesPerView: "auto",
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
  });
});


