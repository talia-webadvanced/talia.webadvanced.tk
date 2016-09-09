$(document).ready(function(){

	$(".button").hide();
 
	function typeText(){	
		var str = "Looks like the terrible vegan queen with her stupid veganism has contaminated the grammar of Mr. Talk-O!<br><br>Help him by pointing out his grammar mistakes.",
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
		window.location='7-mystery-box.html';
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