$(document).ready(function() {
	$('.popup_link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
    
    $('.gallery_slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./img/arrow-prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./img/arrow-next.png" alt=""></button>'
    });

    $('.gallery_item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

    $('.menu_btn').on('click', function(){
        $('.menu_list').toggleClass('menu_list--active')
    })
});


