$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 4000,
	});

	new WOW().init();

	$(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    autoplay: 200,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        800:{
		        	items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		})

        $('#back-to-top').tooltip('show');

        $('.counter').counterUp({
		    delay: 10,
		    time: 1000
		});
});