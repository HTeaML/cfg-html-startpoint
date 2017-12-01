$(document).ready(function() {

	var classHighlight = 'highlight';
	var $hover = $('h3').on('hover', function(){
		e.preventDefault();
		$hover.removeClass(classHighlight);
		$(this).addClass(classHighlight);
	})


	$('.show').hide();
	$('.show').children().hide();

	/*define groups of filters*/
	var groups = ['lang', 'freq', 'day', 'area', 'other'];
	var lang = ['py', 'r', 'ruby', 'js', 'php', 'other_lang'];
	var freq = ['2week', 'week', 'month', 'notreg'];
	var day = ['tue', 'thu'];
	var area = ['shef', 'wshef'];
	var other = ['uni', 'women', 'course', 'web', 'hack'];

	/*show all if the checkbox is checked*/
	$('input:checkbox').change(function(){
		if ($(this).is(':checked')) {
			if ($(this).val() == 'show') {
				$('.show').hide();
			}
		}
	})

	/*show and hide the group-detail if the name of the group is clicked*/
	$('.info').hide();
	$('.show').on('click', function(){
		var list = $(this).find('.info');
		if ( $(list).css('display') == 'none') {
			$(list).show();
		} else {
			$(list).hide();
		}
	});

	/*show if box is checked*/
	$('input:checkbox').change(function(){
		$('.show').hide();
		if ($(this).is(':checked')) {
			var val = '.'+ $(this).val();
			$(val).parent().show()
			$(val).children().show()
		}
	});	

	/*hide if box is unchedked*/
	$('input:checkbox').change(function(){	 
		if (!$(this).is(':checked')) {
			var val = '.'+ $(this).val();
			$(val).children().hide();
		}
	});
})

