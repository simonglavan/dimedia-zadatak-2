$(document).ready(function() {


    $.getJSON("data.json",
        function (data) {

            var s2data = $.map(data, function (obj) {
                obj.id = obj.id || obj.pk; 
              
                return obj;
              });

             
              $('#cities').select2({
                dropdownParent: $('.column-cities'),
                placeholder: "Upišite grad ili više gradova ili lokaciju",
                data: s2data
                
            });
            
        }
    );

    $('#tip-nekretnine').select2({
        dropdownParent: $('.column-tip-nekretnine'),
        minimumResultsForSearch: -1,
        placeholder: "Tip nekretnine"
    });

    $('#opcije').select2({
        dropdownParent: $('body'),
        placeholder: "Opcije"
        
    });

    $('#opcije').on('select2:open', function (e) {
        $('body').css('overflow', 'hidden');
      });
    $('#opcije').on('select2:close', function (e) {
        $('body').css('overflow', 'auto');
      });

    //SECONDARY FIELDS

    $('#detailed-search-btn').click(function (e) { 
        e.preventDefault;
    
        if($('#search-form-secondary').css('display') == "none") {

            $('#search-form-secondary').slideDown();
            $('.search-form-container').addClass('js-secondaryOpen');
            $(this).text($(this).data('opened-text'));
            
        } else {
            $('#search-form-secondary').slideUp();
            $('.search-form-container').removeClass('js-secondaryOpen');
            $(this).text($(this).data('closed-text'));
        }
        
    });

    $(window).resize(function () { 
       
    });
    
});