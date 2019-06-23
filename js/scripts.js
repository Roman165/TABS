$(document).ready(function(){

	$('.tabs__content + .tabs__content').hide();
	$('.tabs__l').first().addClass('active')

	$('.tabs__l').on('click', function(e){
		e.preventDefault();
		$('.tabs__content ').hide();
		$('.tabs__l').removeClass('active')
		$($(this).attr('href')).fadeIn();
		$(this).addClass('active');
		$('.tabs__link-img').addClass('active')

		})
});