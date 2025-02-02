$(document).ready(function () {
	$('#preloader').delay(3000).fadeOut();

	if ($(window).width() <= 600){
		$('.fullpage-all-wrapper .news-fond-wrapper .slick-track article:first-child').remove();
	}

	$('.slider-wrapper').slick({
		slidesToShow: 4,
		infinite: false,
		dots: false,
		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-circle-arrow-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-circle-arrow-right'></i></button>",
		responsive: [	
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: false,
			  }
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
			  }
			}
		  ]
	});
	
	$('.slick-arrow, .slick-arrow').wrapAll('<div class="arrows-wrapper">');

	$('#pagepiling').pagepiling({
		menu: '#menuAbout',
		anchros: ['page1'],
		navigation: false,
		loopBottom: true,
		loopTop: false,
		touchSensitivity: 50
	});
	
	$('.sidenav').sidenav();
	
	$('.collapsible').collapsible();

		

}); //ready