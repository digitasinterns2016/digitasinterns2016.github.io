//jTinder Enhancements


//Dim Profile Picture on Hover
//Show Bio
var dur = 200;
$( "#tinderslide" ).hover(
	function() {
		"use strict";
		$( '.theBio' ).fadeTo(dur,1);
		$('.bioPic').fadeTo(dur, 0.3);
	}, function() {
		"use strict";
		$( '.theBio' ).fadeTo(dur,0);
		$('.bioPic').fadeTo(dur,1);
	}
);

//Enable Directory links & Reset jTinder swiping
var i=5;
$(function() {
	"use strict";
	$('li > a').click(function(e) {
		$("."+e.target.id).css('transform',''); //reset transforms
		$(".like").css('opacity',''); //reset badge opacity
		$(".dislike").css('opacity',''); //reset badge opacity
		$("."+e.target.id).show(); //unhide image
		$('#importGS').append($("."+e.target.id)); //move image to end of list (top from jTinder's perspective)
		$("#tinderslide").jTinder('startOver'); //reset jTinder to recognize new list order
		i++;
	});        
});