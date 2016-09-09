$(document).ready(function(){


function typeText(){	
		var str = "Congratulations, you’ve saved the world from the evil vegan forces of the evil vegan queen.<br>Now everyone will live happily ever after with tacos, all thanks to you!",
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
			setTimeout(type, 30);

		}());	
	};

	$(".button").delay(8000).show(0);

var vid = document.getElementById("bgvid");
var pauseButton = document.getElementById("vidpause");

function vidFade() {
  vid.classList.add("stopfade");
}
    
    
});