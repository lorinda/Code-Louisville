
/* Fade in the Slogan on page load */
$(document).ready(function () {
	$('.sloganText').hide().fadeIn('slow');
});


$(document).ready(function () {
    
    /* When the window scrolls ... */
    $(window).scroll(function () {
    
        /* Check scroll location of Practice areas */
        $('.practice_areas').each(function (i) {
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* When completely visible in the window, fade them in */
            if (bottom_of_window > bottom_of_object) {
                
                $(this).animate({'opacity': '1'}, 500);
                    
            }
            
        });
    
    });
    
});

$(document).ready(function () {
    
    /* When the window scrolls ... */
    $(window).scroll(function () {
    
        /* Check scroll location of paragraphs */
        $('p').each(function (i) {
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* When visible, fade them in */
            if (bottom_of_window > bottom_of_object) {
                
                $(this).animate({'opacity': '1'}, 500);
                    
            }
            
        });
    
    });
    
});