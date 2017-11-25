$(document).ready( function() {
	//=====================//
	// 			OWL CUSTUM
	//=====================//
	$('.owl-carousel-fluid').owlCarousel({
		items: 1,
		dots: true,
		dotsData: true,
		dotsContainer: '#slider-our-work'
	});
	$('.owl-carousel-comment').owlCarousel({
		items: 1,
		margin: 30,
		responsive: {
			720 : {
				items: 3
			}
		}
	});
	//=====================//
	// 			#ANCHOR SLIDE
	//=====================//
	$(window).scroll(function(){
		if($(window).scrollTop() > 80){
			$('#action-header-menu').slideDown(300);
		} else if($(window).scrollTop() < 70){
			$('#action-header-menu').slideUp(300);
		}
	});
	//=====================//
	// 			#POP-UP
	//=====================//
	var popupCallFeedback = $('.popup-call-feedback');
	var popupWrapperContent = $('.wrapper-popup-content')
	var windowPopup = $('.wrapper-popup')
	var closeButton = $('.close-button');

	popupCallFeedback.click(function(){
		windowPopup.fadeIn(100);
		popupWrapperContent.delay(500).fadeIn(350);
	});
	closeButton.click(function(){
		windowPopup.fadeOut(200).css('display', 'none');
	});
	
	setTimeout(function(){
		windowPopup.fadeIn(100);
		popupWrapperContent.delay(500).fadeIn(350);
	}, 5000);

	function openMenu(){
		var buttonOpenMenu = $('.block-mobile-action');
		var menuHeader = $('.block-mobile-menu');
		buttonOpenMenu.click(function(){
			if(menuHeader.css('display') == 'none'){
				menuHeader.slideDown(300);
			}
			else{
				menuHeader.slideUp(300);
			}
		});
	}
	openMenu().click(buttonOpenMenu);

});