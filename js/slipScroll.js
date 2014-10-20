var setLogo = function () {

	$('.movable').each(function() {
		var defaultLogoPos = $('.default').offset().top - $(this).closest('.container').offset().top;
		$(this).css('top', defaultLogoPos);
	});
};

$(document).scroll(function() {
	setLogo();
});

setLogo();