

$(document).ready(function () {
  $('.courses-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,      // ✅ arrows off
    dots: true,         // (chaaho to true, warna false)
    autoplay: true,     // ✅ autoplay on
    autoplaySpeed: 2500,
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } }
    ]
  });
});
