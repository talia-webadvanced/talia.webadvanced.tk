$(document).ready(function(){

	$(".button").hide();
 
	function typeText(){	
		var str = "Oh no!<br>It’s the evil vegan queen herself!<br>Click the Tacoshooter5000 to launch tacos in her face until she succumbs to tasting a taco and forever giving up her veganism -- and in turn saving mankind!",
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

	setTimeout(typeText, 1600);

	$(".button").click(function(){
		window.location='10-aerobics.html';
	});

 
	$( function() {

		$( "#taliaStanding" ).draggable({ axis: "x", containment: "#containment-wrapper1", scroll: false  });
		$( "#taliaRhino" ).draggable({ axis: "x", containment: "#containment-wrapper1", scroll: false   });
	
		$( "#draggableRhino" ).draggable();
		$( "#taliaStanding" ).droppable({
			  drop: function(){
				console.log("Dropped");
				$(".taliaRhino").show();
				$("#draggableRhino").hide();
				$(".taliaStanding").hide();
			  }
		});
		$("#droppableTaco").droppable({
			drop: function(){
				window.location='7-tofu-wall.html';
			}
		});
	
	});
  
});