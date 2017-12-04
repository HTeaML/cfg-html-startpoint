$(document).ready(function() {

    var classHighlight = 'highlight';
    var $hover = $('.group').hover(function(e){
        e.preventDefault();
        $hover.removeClass(classHighlight);
        $(this).addClass(classHighlight);
    })

/*    $('.show').hide();
    $('.show').children().hide();*/

    /*show and hide the group-detail if the name of the group is clicked*/
    $('.info').hide();
    $('h3').on('click', function(){
        var list = $(this).siblings('.info');
        if ( $(list).css('display') == 'none') {
            $(list).show();
        } else {
            $(list).hide();
        }
    });

    /*show all if the checkbox is checked*/
/*    $('input:checkbox').change(function(){
        if ($(this).is(':checked')) {
            if ($(this).val() == 'show') {
                $('.show').hide();
            }
        }
    })*/

    /*show if box is checked*/
/*    $('input:checkbox').change(function(){
        $('.show').hide();
        if ($(this).is(':checked')) {
            var val = '.'+ $(this).val();
            $(val).parent().show()
            $(val).children().show()
        }
    }); */

    /*hide if box is unchedked*/
/*    $('input:checkbox').change(function(){   
        if (!$(this).is(':checked')) {
            var val = '.'+ $(this).val();
            $(val).children().hide();
        }
    });*/

/*filtering on many groups*/
/*from: https://stackoverflow.com/questions/35011034/jquery-filtering-with-multiple-checkboxes*/
    var $filterCheckboxes = $('input[type="checkbox"]');
    $filterCheckboxes.on('change', function() {

        var selectedFilters = {};
        $filterCheckboxes.filter(':checked').each(function() {

            if (!selectedFilters.hasOwnProperty(this.name)) {
              selectedFilters[this.name] = [];
            }

            selectedFilters[this.name].push(this.value);
        });

        // create a collection containing all of the filterable elements
        var $filteredResults = $('.show');
        // loop over the selected filter name -> (array) values pairs
        $.each(selectedFilters, function(name, filterValues) {

        // filter each .show element
            $filteredResults = $filteredResults.filter(function() {

                var matched = false, 
                currentFilterValues = $(this).data('category').split(' ');

                // loop over each category value in the current .show's data-category
                $.each(currentFilterValues, function(_, currentFilterValue) {

                // if the current category exists in the selected filters array
                // set matched to true, and stop looping. as we're ORing in each
                // set of filters, we only need to match once

                    if ($.inArray(currentFilterValue, filterValues) != -1) {
                        matched = true;
                        return false;
                }
                });

                // if matched is true the current .show element is returned
                return matched;

            });
        });
        $('.show').children().hide().filter($filteredResults).children().show();
    });
});


