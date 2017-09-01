$('.slider').slick({
  centerMode: true,
  autoplay: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$(window).scroll(function(){
  if($(this).scrollTop() > $('.slick-track').height()){
    $('.menu--hide').css({display : "block"})
}if($(this).scrollTop() < $('.slick-track').height()){
  $('.menu--hide').css({display : "none"})
}
})

