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
	$('input:checkbox').change(function(){
		$('.show').hide();
		if ($(this).is(':checked')) {
			var val = '.'+ $(this).val();
			$(val).parent().show()
			$(val).children().show()
		}
	});	
	$('input:checkbox').change(function(){	 
		if (!$(this).is(':checked')) {
			var val = '.'+ $(this).val();
			$(val).children().hide();
		}
/*		if ($(this).is(':checked')) {
            alert('checked');*/
/*        };
		if ('input[type="checkbox"]' == false ) {
			$('.py').hide();*/
		/*}*/
	});
})

/*$('input:checkbox').change(
    function(){
        if ($(this).is(':checked')) {
            alert('checked');
        }
    });*/