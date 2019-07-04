$(document).ready(function () {
	$('.partners-slider').owlCarousel({
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1,
                navText: ["<img src='img/arrow-left.svg' class='left'>","<img src='img/arrow-right.svg' class='right'>"],
                navClass: ['owl-prev','owl-next']
            },
            600:{
                items:2,
                navText: ["<img src='img/arrow-left.svg' class='left'>","<img src='img/arrow-right.svg' class='right'>"],
                navClass: ['owl-prev','owl-next'],
                margin:30
            },
            780:{
                items:2,
                navText: ["<img src='img/arrow-left.svg' class='left'>","<img src='img/arrow-right.svg' class='right'>"],
                navClass: ['owl-prev','owl-next'],
                margin:30
            },
            1000:{
                items:4,
                navText: ["<img src='img/arrow-left.svg' class='left'>","<img src='img/arrow-right.svg' class='right'>"],
                navClass: ['owl-prev','owl-next']
            }
        }
    });
});	

$(document).ready(function () {
	$('.burger-menu').on('click', function () {
	    $('.menu').addClass('d-block');
	    $('.burger-menu').addClass('d-none');
	    $('.close-menu').addClass('d-block');
	 });

	  $('.close-menu').on('click', function () {
	    $('.menu').removeClass('d-block');
	    $('.burger-menu').removeClass('d-none');
	    $('.close-menu').removeClass('d-block');
	  });
});	