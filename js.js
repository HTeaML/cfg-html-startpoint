$(document).ready(function() {

    var classHighlight = 'highlight';
    var $hover = $('h3').hover(function(e){
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


    /*define groups of filters*/
/*    var groups = ['lang', 'freq', 'day', 'area', 'other'];
    var lang = ['py', 'r', 'ruby', 'js', 'php', 'other_lang'];
    var freq = ['2week', 'week', 'month', 'notreg'];
    var day = ['tue', 'thu'];
    var area = ['shef', 'wshef'];
    var other = ['uni', 'women', 'course', 'web', 'hack'];*/

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

    // filter each .flower element
    $filteredResults = $filteredResults.filter(function() {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

      // loop over each category value in the current .flower's data-category
      $.each(currentFilterValues, function(_, currentFilterValue) {

        // if the current category exists in the selected filters array
        // set matched to true, and stop looping. as we're ORing in each
        // set of filters, we only need to match once

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

      // if matched is true the current .flower element is returned
      return matched;

    });
});


  $('.show').hide().filter($filteredResults).show();

});
});


