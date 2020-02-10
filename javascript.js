$('[data-fancybox]').fancybox({ 
protect: true,
 buttons: [ "zoom",
  //"share",
"slideShow",
 //"fullScreen",
  "download",
   "thumbs",
    "close" ]
     });
 
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    style="clip-path: polygon(50% 0%, 100% 0, 100% 88%, 65% 51%, 98% 88%, 50% 100%, 0 83%, 0 0);
background: #802731;"