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
	$('.title').click(function() {
		$('.fac-box').toggleClass('active');
	});
	$('.title1').click(function() {
		$('.fac-box1').toggleClass('active');
	});
	$('.title2').click(function() {
		$('.fac-box2').toggleClass('active');
	});
	$('.title3').click(function() {
		$('.fac-box3').toggleClass('active');
	});
	$('.title4').click(function() {
		$('.fac-box4').toggleClass('active');
	});

	$(this).bind('contextmenu', function(e) {
		e.preventDefault();
	});
});
