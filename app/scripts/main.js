$(document).ready(function() {
	/*
		HANDLING SCROLL, OVERLAY, NAVBAR
		--------------------------------
	*/
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


	// Fetch quotes for index.html only
	if ($('.main-container').attr('id') == 'index-page') {
		var quotess = $.ajax({
			url: '/quotes.json',
			dataType: 'json',
			success: function(res) {
				var resQuote = res[Math.floor((Math.random() * res.length))];
				$('.section--quotes#indexQuotes').find('blockquote').html(resQuote.quote)
				$('.section--quotes#indexQuotes').find('.profil').html(
															`<img src="${resQuote.img}" alt="profile">
															${resQuote.name}, ${resQuote.role}`
												 );
			},
			error: function(error) {
				console.log('Error fetching quote');
				console.log(error);
			}

		});
	}

	/*
		FETCHING SOCIAL MEDIA FEED
		--------------------------------
	*/

	// Instagram
	$.ajax({
		url: 'https://api.instagram.com/v1/users/self/media/recent',
		dataType: 'jsonp',
		data: {	access_token: '4035390268.1677ed0.6409e7a7c54941e4bc892d7d975b7376', count: 2 },
		success: function(res) {
				$('.section--timeline .timeline-container').prepend(
					`<a href="${res.data[0].link}" class="timeline instagram" target="_blank">
	 					<div class="text">
	 						 ${res.data[0].caption.text}
	 					</div>
					 	<img src="${res.data[0].images.standard_resolution.url}" alt="Instagram Photo"/>
					</a>`
				);
				$('.section--timeline .timeline-container').append(
					`<a href="${res.data[1].link}" class="timeline instagram" target="_blank">
	 					<div class="text">
	 						 ${res.data[1].caption.text}
	 					</div>
					 	<img src="${res.data[1].images.standard_resolution.url}" alt="Instagram Photo"/>
					</a>`
				);
		},
		error: function() {
			console.log('error');
		}

	}).done(function() {

		// Twitter
		$.ajax({
			url: 'twitter-get.php',
			success: function(res) {
					res.forEach(function(tweet) {
						$('.section--timeline .timeline-container .timeline:first-child').after(
							`<div class="timeline twitter">
							 	<div class="text__body">${tweet.text}</div>
						 		<a href="https://twitter.com/statuses/${tweet.id_str}" class="text__footer" target="_blank">view on twitter <i class="fa fa-twitter pull-right"></i></a>
							</div>`
						);
					})
			},
			error: function() {
				console.log('Opps, cant display tweets');
			}

		});
	})
});

console.log("Hi, it looks like you're a very curious about code 😻! Let's join us, let us know about you via %ccontact@dreamakasa.com", "background: #3fa9f5; color: white; padding: 3px; border-radius: 3px; font-weight: bold");
