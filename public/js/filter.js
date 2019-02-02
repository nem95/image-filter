$('.filter input[type=range]').on('input change', function() {
	$('img').css({
		'-webkit-filter': 'blur(' + $('#blur').val() + 'px)brightness(' + $('#brightness').val() + ')saturate(' + $('#saturate').val() + '%)hue-rotate(' + $('#hue-rotate').val() + 'deg)contrast(' + $('#contrast').val() + '%)invert(' + $('#invert').val() + '%)grayscale(' + $('#grayscale').val() + '%)sepia(' + $('#sepia').val() + '%)',
		'-moz-filter': 'blur(' + $('#blur').val() + 'px)brightness(' + $('#brightness').val() + ')saturate(' + $('#saturate').val() + '%)hue-rotate(' + $('#hue-rotate').val() + 'deg)contrast(' + $('#contrast').val() + '%)invert(' + $('#invert').val() + '%)grayscale(' + $('#grayscale').val() + '%)sepia(' + $('#sepia').val() + '%)',
		'-o-filter': 'blur(' + $('#blur').val() + 'px)brightness(' + $('#brightness').val() + ')saturate(' + $('#saturate').val() + '%)hue-rotate(' + $('#hue-rotate').val() + 'deg)contrast(' + $('#contrast').val() + '%)invert(' + $('#invert').val() + '%)grayscale(' + $('#grayscale').val() + '%)sepia(' + $('#sepia').val() + '%)',
		'-ms-filter': 'blur(' + $('#blur').val() + 'px)brightness(' + $('#brightness').val() + ')saturate(' + $('#saturate').val() + '%)hue-rotate(' + $('#hue-rotate').val() + 'deg)contrast(' + $('#contrast').val() + '%)invert(' + $('#invert').val() + '%)grayscale(' + $('#grayscale').val() + '%)sepia(' + $('#sepia').val() + '%)',
	});
});

$('.transformation input[type=range]').on('input change', function() {
	$('img').css({
		'-ms-transform': 'rotate(' + $('#rotate').val() + 'deg) scale(' + $('#scale-x').val() + ',' + $('#scale-y').val() + ') translate(' + $('#translate-x').val() + 'px,' + $('#translate-y').val() + 'px) skew(' + $('#skew').val() + 'deg)',
		'-webkit-transform': 'rotate(' + $('#rotate').val() + 'deg) scale(' + $('#scale-x').val() + ',' + $('#scale-y').val() + ') translate(' + $('#translate-x').val() + 'px,' + $('#translate-y').val() + 'px) skew(' + $('#skew').val() + 'deg)',
		'transform ': 'rotate(' + $('#rotate').val() + 'deg) scale(' + $('#scale-x').val() + ',' + $('#scale-y').val() + ') translate(' + $('#translate-x').val() + 'px,' + $('#translate-y').val() + 'px) skew(' + $('#skew').val() + 'deg)'
	});
});
