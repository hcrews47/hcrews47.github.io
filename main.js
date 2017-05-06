$(document).ready(function () {
	$('li').hover(function (){
		$(this).css('color', 'white');
		$(this).css('cursor', 'pointer')
	}, function(){
		$(this).css('color', 'black');	
		$(this).css('cursor', 'auto');
	});
	$('a').hover(function (){
		$(this).css('color', 'white');
		$(this).css('cursor', 'pointer')
	}, function(){
		$(this).css('color', 'black');	
		$(this).css('cursor', 'auto');
	});
});

// use onmouseover instead of hover, let's get rid of jquery



// function scrollDown() {		//function header
// 	$('body').animate({ scrollTop: $('.container2').offset().top }, 1000);	
// }

// function scrollUp() {
// 	$('body').animate({ scrollTop: $('.container1').offset().top }, 1000);
// }

