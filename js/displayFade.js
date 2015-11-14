$(function(){
	$('.sloganText').hide().fadeIn('slow');
});

/* Load DIV After Scrollbar Is Moved 100px */
	$(window).scroll( function() {
        if ( $(window).scrollTop() > 5000 ) {
           sec1Show(); /* calls sec1 Function below */
        }
		if ($(window).scrollTop() >6000){
			sec1Hide();
		}
});
	
texts = $("#section1Text").fadeTo(0, 0.05);

$('#wrapper').scroll(function(d,h) {
    texts.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $('#portfolio').scrollTop() + $('.container').height();
        if (a < b) $(this).fadeTo(500,1);
    });
});