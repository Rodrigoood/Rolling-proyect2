


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, 
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay:{
        delay:3000,
        disableOnInteraction: false,
      },
      breakpoints: {
          640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
          slidesPerView: 4,
          spaceBetween: 15,
      },
      1024: {
          slidesPerView: 5,
          spaceBetween: 20,
      },
  },
});