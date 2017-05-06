$(document).ready(function () {
	$('.book').hover(function (){
		$(this).fadeTo(300, '.6');
		$(this).css('cursor', 'pointer');
	}, function(){
		$(this).fadeTo(1, '1');	
		$(this).css('cursor', 'auto');
	});
});

// use onmouseover instead of hover


// var ow = 1211;
// var w = window.innerWidth;
// var array = ["brothers", "catch", "dying", "gayscience", "moses", "she", "zarathustra", "huck", "eden", "cane", "optimist", "kafka", "tobacco", "yeats", "nativeson", "oconnor", "blackboy"];

// $(window).resize(function () { 
// 	var w = window.innerWidth;

// 	if(ow > w){
// 		for(var i = 0; i < array.length; i++){
// 			var book = document.getElementById(array[i]),
// 			style = window.getComputedStyle(book),
// 			top = style.getPropertyValue('top');

// 			// var topS = top.split('%');
// 			// var num = topS[0];
// 			// num = parseInt(num);

// 			var change = (ow - w)*.2;
// 			// var divide = w/ow;
// 			// var percent = divide*100; 

// 			var newTop = top - change;
// 			document.getElementById(array[i]).style.top = newTop;
// 			console.log(top);
// 		}
// 		ow = window.innerWidth;
// 	}
// });
