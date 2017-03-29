$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop: true,
   	mouseDrag: false,
   	margin: 10,
   	autoWidth: false,
    nav: true,
   	autoplay: true,
   	autoplayTimeout: 4000,
   	smartSpeed: 500,
   	autoplayHoverPause: true,
   	responsive: {
   		0: {
   			items: 1,
   		},
   		420: {
   			items: 3,
   		},
      800: {
        items: 5,
      }
   	}
  });
});
