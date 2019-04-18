$(document).ready(function() {
	$('#search').click(function() {
		$('.menu-item').addClass('hide-item');
		$('.search-form').addClass('active');
		$('.close').addClass('active');
		$('#search').addClass('hide-search');
	});
	// Close Button
	$('.close').click(function() {
		$('.menu-item').removeClass('hide-item');
		$('.search-form').removeClass('active');
		$('.close').removeClass('active');
		$('#search').removeClass('hide-search');
	});

	$('.menu-btn').click(function() {
		$('.menu-btn').toggleClass('close');
		$('nav').toggleClass('show');
	});

	$(this).bind('contextmenu', function(e) {
		e.preventDefault();
	});
});
