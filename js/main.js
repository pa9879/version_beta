(function($) {
	"use strict"

	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	// Image margin
	 //var height = parseFloat($("#header.transparent-navbar").css("height"));
	 //height = height + 30 +"px";
	 //console.log(height);
	 //$("#image-top").css("margin-top", height);

	//preloader
	
            $(document).ready(function () {
                setTimeout(function () {
                    $("#content").slideUp();
                }, 5300)
            })

	// Mobile nav toggle
	$('.navbar-toggle').on('click',function() {
		$('.main-nav').toggleClass('open');
	});
	
	$('.main-nav li').on("click", function(){
    	$('.main-nav').removeClass('open');
  	});

	// Fixed nav
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();
		wScroll > 50 ? $('#header').addClass('fixed-navbar') : $('#header').removeClass('fixed-navbar');
	});

	// Smooth scroll
	$(".main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 800);
	});

	// Section title animation
	$('.section-title').each(function() {
		var $this = $(this);
		$this.find('.title > span').each(function(i) {
			var $span = $(this);
			var animated = new Waypoint({
				element: $this,
				handler: function()
				{
					setTimeout(function(){
						$span.addClass('appear')
					}, i*250);
					this.destroy();
				},
				offset: '95%'
			});
		});
	});

	// Galery Owl
	$('#galery-owl').owlCarousel({
		items:1,
		loop:true,
		margin:0,
		dots : false,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay : true,
		autoplaySpeed :500,
		navSpeed :500,
		responsive : {
	    0 : {
	       stagePadding : 0,
	    },
	    768 : {
	        stagePadding : 120,
	    }
		}
	});

	// Parallax Background
	$.stellar({
		responsive: true
	});

	// CountTo
	$('.counter').each(function() {
		var $this = $(this);
		var counter = new Waypoint({
			element: $this,
			handler: function()
			{
				$this.countTo();
			},
			offset: '95%'
		});
	});

	
	// $(window).resize(function(){
	// 	var height = parseFloat($("#header.transparent-navbar").css("height"));
	// 		height = height + 100 +"px";
	// 		console.log(height);
	// 	$("#image-top").css("margin-top", height);
	// });
})(jQuery);
