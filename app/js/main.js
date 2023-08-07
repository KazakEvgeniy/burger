$(function () {
	$('.customers-slider').slick({



		infinite: false,
		prevArrow: '<button type="button" class="slick-prev"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.04 5.06H5.18L7.74 2.5C7.82 2.40667 7.86 2.3 7.86 2.18C7.86 2.06 7.82 1.95333 7.74 1.86L6.66 0.799999C6.56667 0.706666 6.46 0.66 6.34 0.66C6.22 0.66 6.11333 0.706666 6.02 0.799999L0.64 6.18C0.546667 6.27333 0.5 6.38 0.5 6.5C0.5 6.62 0.546667 6.72667 0.64 6.82L6.02 12.2C6.11333 12.2933 6.22 12.34 6.34 12.34C6.46 12.34 6.56667 12.2933 6.66 12.2L7.74 11.14C7.82 11.0467 7.86 10.94 7.86 10.82C7.86 10.7 7.82 10.5933 7.74 10.5L5 7.76H12.04C12.1733 7.76 12.28 7.72 12.36 7.64C12.4533 7.54667 12.5 7.43333 12.5 7.3V5.5C12.5 5.38 12.4533 5.28 12.36 5.2C12.28 5.10667 12.1733 5.06 12.04 5.06Z" fill="#FF702A"/></svg></button>',



		nextArrow: '<button type="button" class="slick-next"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.96 7.94H7.82L5.26 10.5C5.18 10.5933 5.14 10.7 5.14 10.82C5.14 10.94 5.18 11.0467 5.26 11.14L6.34 12.2C6.43333 12.2933 6.54 12.34 6.66 12.34C6.78 12.34 6.88667 12.2933 6.98 12.2L12.36 6.82C12.4533 6.72667 12.5 6.62 12.5 6.5C12.5 6.38 12.4533 6.27333 12.36 6.18L6.98 0.8C6.88667 0.706667 6.78 0.66 6.66 0.66C6.54 0.66 6.43333 0.706667 6.34 0.8L5.26 1.86C5.18 1.95333 5.14 2.06 5.14 2.18C5.14 2.3 5.18 2.40667 5.26 2.5L8 5.24H0.96C0.826666 5.24 0.719999 5.28 0.639999 5.36C0.546666 5.45333 0.5 5.56667 0.5 5.7V7.5C0.5 7.62 0.546666 7.72 0.639999 7.8C0.719999 7.89333 0.826666 7.94 0.96 7.94Z" fill="#FF702A"/></svg></button>',

		responsive: [
			{
				breakpoint: 540,
				settings: {
					nextArrow: false,
					prevArrow: false
				}
			},
		]
	});



	$('.promo-content__form-count').styler();





	$('.about-tabs__item').on('click', function (e) {
		e.preventDefault();
		$('.about-tabs__item').removeClass('about-tabs__item--active');
		$(this).addClass('about-tabs__item--active');

		$('.about-tabs__content-item').removeClass('about-tabs__content-item--active');
		$($(this).attr('href')).addClass('about-tabs__content-item--active');
	});



	$('.menu__btn, .menu a').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');

	});
});