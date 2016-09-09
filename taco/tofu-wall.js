 $(document).ready(function(){
 
 	$(".rhino").hide();
 
 	$(".resources").click(function(){
 		$(this).css("background-image","url('images/resources-drawer.png')");
 		$(".rhino").show();
 	});
 
 
 	$(".button").hide();
 
		function typeText(){	
			var str = "Looks like the evil vegan queen<br>has placed a Tofu Road Block!<br><br>Muster help from any available resources.",
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

		$(".button").delay(5000).show(0);

		setTimeout(typeText, 1600);

		$(".button").click(function(){
			console.log("it worked");
			$(".modalContainer").hide();
		});

 
  
 	$(".taliaRhino").hide();
 
	 $( function() {

 
		$( "#taliaStanding" ).draggable({ axis: "x", containment: "#containment-wrapper2", scroll: false  });
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
				window.location='4-flying-taco.html';
			}
		});
	
	
	  });
  
  });