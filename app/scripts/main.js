$(document).ready(function() {
	$('#toggleNavbar').on('click', function() {
		$(this).toggleClass('open');
		// $('.wrapper').toggleClass('sidebar--open');
		$(this).parents('.navbar').toggleClass('navbar--open');
		$('#overlay').toggleClass('overlayed');
	})
	$('#overlay').on('click', function() {
		$(this).removeClass('overlayed');
		$('#toggleNavbar').removeClass('open');
		$('.navbar').removeClass('navbar--open');
	})

    $('[data-toggle=\'tooltip\']').tooltip();

    // Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 10;
	var navbarHeight = $('nav.navbar').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;

	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	        // console.log(lastScrollTop);
	    }
	}, 250);

	function hasScrolled() {
	    var st = $('body').scrollTop();
	    
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    if (st > lastScrollTop && st > navbarHeight){
	   	 	// Scroll Down
	        $('nav.navbar').addClass('navbar--hide');

	        // remove open navbar when scrolled down
            $('#overlay').removeClass('overlayed');
			$('#toggleNavbar').removeClass('open');
			$('.navbar').removeClass('navbar--open');
	        // console.log('hide');
	    } else if(st + $(window).height() < $(document).height()) {
	    	// Scroll Up
            $('nav.navbar').removeClass('navbar--hide');
	    }
	    
	    lastScrollTop = st;
	}


})