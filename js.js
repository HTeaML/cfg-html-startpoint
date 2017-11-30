$(document).ready(function() {
	$('.info').hide();
	$('.show').on('click', function(){
		var list = $(this).find('.info');
		if ( $(list).css('display') == 'none') {
			$(list).show();
		} else {
			$(list).hide();
		}
	});
})