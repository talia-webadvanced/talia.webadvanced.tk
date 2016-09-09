$(document).ready(function(){

	$(".button").hide();
 
	function typeText(){	
		var str = "The year is 2016.<br>The world is in shambles. . . people are dying and the planet is quickly approaching its final demise.<br><br>The only hope lies in eliminating the one true cause of this chaos: Veganism.<br><br>But the mission is not an easy one! Use a combination of your sharp wit and your and astute skill to collect all the remaining tacos in the land. Use these to gain power over the Evil Vegan Queen and save the world from the evils of veganism.",
			i = 0,
			isTag,
			text;

		(function type() {
			text = str.slice(0, ++i);
			if (text === str) return;

			document.getElementById('typewriter').innerHTML = text;

			var char = text.slice(-1);
			if( char === '<' ) isTag = true;
			if( char === '>' ) isTag = false;

			if (isTag) return type();
			setTimeout(type, 20);

		}());	
	};

	$(".button").delay(10000).fadeIn(5000);

	setTimeout(typeText, 1600);

	$(".button").click(function(){
		window.location='2-warm-up.html';
	});


  
});